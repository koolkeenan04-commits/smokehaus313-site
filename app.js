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

const ageGate = document.querySelector("[data-age-gate]");
const ageForm = document.querySelector("[data-age-form]");
const ageError = document.querySelector("[data-age-error]");
const monthInput = document.querySelector("[data-age-month]");
const dayInput = document.querySelector("[data-age-day]");
const yearInput = document.querySelector("[data-age-year]");
const exitButton = document.querySelector("[data-age-exit]");
const ageStorageKey = "smokehaus313-age-ok";
const shopifyCatalog = document.querySelector("[data-shopify-catalog]");

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

  return {
    day: values.weekday,
    minutes: Number(values.hour) * 60 + Number(values.minute)
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

function hideAgeGate() {
  if (!ageGate) {
    return;
  }

  document.body.classList.remove("gate-open");
  ageGate.classList.add("is-hidden");
}

function showAgeError(message) {
  if (ageError) {
    ageError.textContent = message;
  }
}

function parseDateInput() {
  const month = Number(monthInput?.value);
  const day = Number(dayInput?.value);
  const year = Number(yearInput?.value);

  if (!month || !day || !year) {
    return null;
  }

  const birthDate = new Date(year, month - 1, day);
  const isValidDate =
    birthDate.getFullYear() === year &&
    birthDate.getMonth() === month - 1 &&
    birthDate.getDate() === day;

  if (!isValidDate) {
    return null;
  }

  return { month, day, year };
}

function getAge({ month, day, year }) {
  const today = new Date();
  let age = today.getFullYear() - year;
  const monthOffset = today.getMonth() - (month - 1);

  if (monthOffset < 0 || (monthOffset === 0 && today.getDate() < day)) {
    age -= 1;
  }

  return age;
}

function limitToDigits(event) {
  const cleanedValue = event.target.value.replace(/\D/g, "");
  if (event.target.value !== cleanedValue) {
    event.target.value = cleanedValue;
  }
}

function handleAgeSubmit(event) {
  event.preventDefault();

  const parsedDate = parseDateInput();
  if (!parsedDate) {
    showAgeError("Enter a valid birth date to continue.");
    return;
  }

  if (getAge(parsedDate) < 21) {
    showAgeError("This site is for visitors 21 and older.");
    return;
  }

  sessionStorage.setItem(ageStorageKey, "true");
  showAgeError("");
  hideAgeGate();
}

function restoreGateState() {
  if (sessionStorage.getItem(ageStorageKey) === "true") {
    hideAgeGate();
  }
}

function loadShopifyCatalog() {
  if (!shopifyCatalog || shopifyCatalog.dataset.shopifyEnabled !== "true") {
    return;
  }

  const mount = shopifyCatalog.querySelector("[data-shopify-mount]");
  const template = shopifyCatalog.querySelector("[data-shopify-template]");

  if (!mount || !template) {
    return;
  }

  mount.append(template.content.cloneNode(true));

  const script = document.createElement("script");
  script.src = "https://cdn.shopify.com/storefront/web-components.js";
  script.async = true;
  document.head.append(script);
}

if (monthInput && dayInput && yearInput) {
  [monthInput, dayInput, yearInput].forEach((input) => {
    input.addEventListener("input", limitToDigits);
  });
}

if (ageForm) {
  ageForm.addEventListener("submit", handleAgeSubmit);
}

if (exitButton) {
  exitButton.addEventListener("click", () => {
    showAgeError("You must be 21 or older to enter this site.");
  });
}

const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-nav]");

function closeNav() {
  if (!navToggle || !siteNav) {
    return;
  }

  navToggle.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });
}

function setupReveals() {
  const revealItems = document.querySelectorAll("[data-reveal]");

  if (!revealItems.length) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

restoreGateState();
renderStatus();
highlightToday();
setupReveals();
loadShopifyCatalog();
