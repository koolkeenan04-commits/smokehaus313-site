const schedule = [
  { key: "Sun", open: 13 * 60, close: 18 * 60, label: "1:00 PM - 6:00 PM" },
  { key: "Mon", open: 12 * 60, close: 18 * 60, label: "12:00 PM - 6:00 PM" },
  { key: "Tue", open: 10 * 60, close: 16 * 60, label: "10:00 AM - 4:00 PM" },
  { key: "Wed", open: 12 * 60, close: 18 * 60, label: "12:00 PM - 6:00 PM" },
  { key: "Thu", open: 12 * 60, close: 18 * 60, label: "12:00 PM - 6:00 PM" },
  { key: "Fri", open: 12 * 60, close: 19 * 60, label: "12:00 PM - 7:00 PM" },
  { key: "Sat", open: 11 * 60, close: 19 * 60, label: "11:00 AM - 7:00 PM" }
];

const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const statusTargets = document.querySelectorAll(
  "[data-open-status], [data-open-status-secondary]"
);
const dayRows = document.querySelectorAll("[data-day]");

function getEasternNow() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false
  });

  const parts = formatter.formatToParts(now);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const hour = Number(values.hour);
  const minute = Number(values.minute);

  return {
    day: values.weekday,
    minutes: hour * 60 + minute
  };
}

function formatMinutes(totalMinutes) {
  const hour24 = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const suffix = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 || 12;
  return `${hour12}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

function getScheduleForDay(day) {
  return schedule.find((entry) => entry.key === day);
}

function getStatus() {
  const now = getEasternNow();
  const today = getScheduleForDay(now.day);

  if (today && now.minutes >= today.open && now.minutes < today.close) {
    return `Open now until ${formatMinutes(today.close)}`;
  }

  if (today && now.minutes < today.open) {
    return `Closed now, opens today at ${formatMinutes(today.open)}`;
  }

  const startIndex = dayLabels.indexOf(now.day);
  for (let offset = 1; offset <= 7; offset += 1) {
    const nextDay = dayLabels[(startIndex + offset) % 7];
    const nextSchedule = getScheduleForDay(nextDay);

    if (nextSchedule) {
      return `Closed now, opens ${nextDay} at ${formatMinutes(nextSchedule.open)}`;
    }
  }

  return "Hours unavailable";
}

function highlightToday() {
  const { day } = getEasternNow();
  dayRows.forEach((row) => {
    row.classList.toggle("active", row.dataset.day === day);
  });
}

function renderStatus() {
  const status = getStatus();
  statusTargets.forEach((target) => {
    target.textContent = status;
  });
}

renderStatus();
highlightToday();
