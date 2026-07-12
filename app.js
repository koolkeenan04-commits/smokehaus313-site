:root {
  --bg: #070707;
  --bg-soft: #141414;
  --panel: rgba(16, 16, 16, 0.88);
  --panel-solid: #121212;
  --line: rgba(255, 255, 255, 0.12);
  --line-hard: rgba(255, 255, 255, 0.26);
  --text: #f5f0e8;
  --muted: #c0b8ac;
  --teal: #00d2d0;
  --teal-deep: #009d9b;
  --lime: #d7ff2f;
  --hot: #ff3f7d;
  --red: #ff4a36;
  --yellow: #ffe44f;
  --shadow: 0 22px 60px rgba(0, 0, 0, 0.45);
  --radius-xl: 28px;
  --radius-lg: 22px;
  --radius-md: 16px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  font-family: "Chakra Petch", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at 12% 12%, rgba(255, 63, 125, 0.24), transparent 24rem),
    radial-gradient(circle at 86% 10%, rgba(0, 210, 208, 0.2), transparent 18rem),
    linear-gradient(180deg, #0c0c0c 0%, #050505 100%);
}

body.gate-open {
  overflow: hidden;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0.025)),
    repeating-linear-gradient(
      0deg,
      transparent 0,
      transparent 2px,
      rgba(255, 255, 255, 0.015) 2px,
      rgba(255, 255, 255, 0.015) 3px
    );
  pointer-events: none;
  z-index: 0;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

.page-shell {
  position: relative;
  z-index: 1;
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 24px 0 44px;
}

.age-gate {
  position: fixed;
  inset: 0;
  z-index: 20;
  display: grid;
  place-items: center;
  padding: 18px;
}

.age-gate.is-hidden,
html.age-ok .age-gate {
  display: none;
}

html.age-ok body.gate-open {
  overflow: visible;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.age-gate__backdrop {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.84)),
    radial-gradient(circle at top, rgba(255, 63, 125, 0.18), transparent 22rem),
    url("./assets/logo.png") center / 420px auto no-repeat,
    linear-gradient(180deg, #080808 0%, #151515 100%);
  filter: saturate(1.1);
}

.age-gate__panel {
  position: relative;
  width: min(100%, 560px);
  padding: 28px 28px 30px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--radius-xl);
  background:
    linear-gradient(180deg, rgba(14, 14, 14, 0.95), rgba(9, 9, 9, 0.94)),
    var(--panel-solid);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.age-gate__panel::before,
.age-gate__panel::after {
  content: "";
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
}

.age-gate__panel::before {
  top: -80px;
  right: -40px;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(0, 210, 208, 0.3), transparent 66%);
}

.age-gate__panel::after {
  left: -60px;
  bottom: -70px;
  width: 220px;
  height: 220px;
  background: radial-gradient(circle, rgba(255, 63, 125, 0.22), transparent 68%);
}

.age-gate__logo {
  width: 160px;
  margin-bottom: 14px;
}

.age-gate__eyebrow,
.section-mark,
.status-panel__label,
.shelf-card__tag,
.photo-frame span,
.age-gate__form label span,
.hours-board__timezone,
.brand-chip__copy small,
.site-nav a,
.ticker__track span {
  font-size: 0.82rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.age-gate__eyebrow,
.section-mark {
  color: var(--lime);
}

.age-gate h1,
.hero h1,
.pull-up__story h2,
.section-head h2,
.photo-frame h3,
.shelf-card h3,
.contact-block h3,
.site-footer strong {
  margin: 0;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  letter-spacing: 0.02em;
}

.age-gate h1 {
  margin-top: 8px;
  font-size: clamp(3rem, 8vw, 5.2rem);
  line-height: 0.9;
}

.age-gate__copy {
  max-width: 38ch;
  margin: 16px 0 0;
  color: var(--muted);
  line-height: 1.7;
}

.age-gate__form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 22px;
}

.age-gate__form label {
  display: grid;
  gap: 8px;
}

.age-gate__form input {
  width: 100%;
  min-height: 64px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  color: var(--text);
  font: inherit;
  font-size: 1.25rem;
  text-align: center;
}

.age-gate__form input:focus-visible {
  outline: 2px solid var(--teal);
  outline-offset: 2px;
}

.age-gate__actions {
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 20px;
  border: 1px solid var(--line-hard);
  border-radius: 999px;
  font: inherit;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease,
    border-color 180ms ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-2px);
}

.button-neon {
  background: linear-gradient(135deg, var(--teal), var(--lime));
  color: #050505;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12), 0 12px 30px rgba(0, 210, 208, 0.24);
}

.button-ghost {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
}

.age-gate__error {
  min-height: 24px;
  margin: 16px 0 0;
  color: #ff9ab8;
}

.site-header,
.hero,
.pull-up,
.photo-frame,
.shelf-card,
.hours-board,
.contact-block,
.site-footer {
  position: relative;
  background: var(--panel);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 16px 18px;
  border-radius: 999px;
  backdrop-filter: blur(12px);
}

.brand-chip {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.brand-chip__stamp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--lime), var(--teal));
  color: #050505;
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.45rem;
  line-height: 1;
}

.brand-chip__copy {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.brand-chip__copy strong {
  font-size: 1.05rem;
}

.brand-chip__copy small {
  color: var(--muted);
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 16px;
}

.site-nav a {
  position: relative;
  padding: 6px 2px;
  color: #ddd4ca;
  transition: color 180ms ease;
}

.site-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--teal), var(--lime));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 220ms ease;
}

.site-nav a:hover,
.site-nav a:focus-visible {
  color: var(--text);
}

.site-nav a:hover::after,
.site-nav a:focus-visible::after {
  transform: scaleX(1);
}

.site-nav a[aria-current="page"] {
  color: var(--lime);
}

.site-nav a[aria-current="page"]::after {
  transform: scaleX(1);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 52px;
  height: 52px;
  padding: 14px;
  border: 1px solid var(--line-hard);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  transition: border-color 180ms ease, background-color 180ms ease;
}

.nav-toggle:hover,
.nav-toggle:focus-visible {
  border-color: var(--teal);
}

.nav-toggle__bar {
  display: block;
  height: 2px;
  border-radius: 999px;
  background: var(--text);
  transition: transform 220ms ease, opacity 180ms ease;
}

.nav-toggle[aria-expanded="true"] .nav-toggle__bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.nav-toggle[aria-expanded="true"] .nav-toggle__bar:nth-child(2) {
  opacity: 0;
}

.nav-toggle[aria-expanded="true"] .nav-toggle__bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.hero {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 22px;
  margin-top: 22px;
  padding: 30px;
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.hero::before,
.pull-up::before,
.hours-board::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(125deg, rgba(255, 255, 255, 0.015), transparent 38%),
    radial-gradient(circle at top right, rgba(255, 63, 125, 0.12), transparent 28rem);
  pointer-events: none;
}

.hero__copy,
.hero__stack,
.pull-up__story,
.pull-up__note,
.hours-board,
.contact-block {
  position: relative;
  z-index: 1;
  min-width: 0;
}

.hero h1 {
  font-size: clamp(4.2rem, 9vw, 8rem);
  line-height: 0.86;
}

.hero h1 span {
  display: block;
  max-width: 9.5ch;
  margin-top: 14px;
  color: var(--teal);
  font-size: clamp(1.45rem, 3vw, 2rem);
  line-height: 1.02;
  text-shadow: 2px 2px 0 rgba(255, 228, 79, 0.34);
}

.hero__lede,
.pull-up__story p,
.photo-frame p,
.shelf-card p,
.contact-block li,
.site-footer p {
  color: var(--muted);
  line-height: 1.7;
}

.hero__lede {
  max-width: 52ch;
  margin: 18px 0 0;
  font-size: 1.03rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.hero__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0;
  margin: 22px 0 0;
  list-style: none;
}

.hero__tags li {
  padding: 10px 14px;
  border: 1px dashed rgba(255, 255, 255, 0.22);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  color: #e4ddd4;
}

.hero__stack {
  display: grid;
  gap: 18px;
  align-content: start;
}

.logo-poster,
.status-panel,
.pull-up__note {
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
    rgba(0, 0, 0, 0.38);
}

.logo-poster {
  padding: 22px;
  transform: rotate(-1.4deg);
}

.logo-poster img {
  width: min(100%, 360px);
  margin: 28px auto 0;
  filter: drop-shadow(0 18px 24px rgba(0, 0, 0, 0.45));
}

.sticker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  padding: 0 14px;
  border-radius: 999px;
  background: var(--teal);
  color: #050505;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.sticker--lime {
  background: var(--lime);
}

.status-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
}

.status-panel__label {
  margin: 0;
  color: var(--muted);
}

.status-panel__value {
  margin: 8px 0 0;
  font-size: 1.32rem;
  font-weight: 700;
}

.status-panel__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  height: 64px;
  border-radius: 20px;
  background: linear-gradient(180deg, var(--red), var(--hot));
  color: #fff8f2;
  font-family: "Bebas Neue", sans-serif;
  font-size: 2rem;
}

.ticker {
  margin-top: 18px;
  overflow: hidden;
  border-block: 1px solid rgba(255, 255, 255, 0.14);
}

.ticker__track {
  display: flex;
  gap: 28px;
  width: max-content;
  padding: 14px 0;
  animation: ticker-scroll 20s linear infinite;
}

.ticker__track span {
  color: var(--lime);
  white-space: nowrap;
}

@keyframes ticker-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

.page-hero {
  position: relative;
  margin-top: 22px;
  padding: 34px 30px;
  border-radius: var(--radius-xl);
  background: var(--panel);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.page-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(125deg, rgba(255, 255, 255, 0.015), transparent 38%),
    radial-gradient(circle at top right, rgba(255, 63, 125, 0.12), transparent 28rem);
  pointer-events: none;
}

.page-hero > * {
  position: relative;
  z-index: 1;
}

.page-hero h1 {
  margin: 0;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  letter-spacing: 0.02em;
  font-size: clamp(3rem, 7vw, 5.6rem);
  line-height: 0.9;
}

.page-hero .hero__lede {
  max-width: 58ch;
}

.explore {
  margin-top: 24px;
}

.explore__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.explore-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 240px;
  padding: 22px;
  border-radius: var(--radius-xl);
  background: var(--panel);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: transform 220ms ease, border-color 220ms ease;
}

.explore-card::after {
  content: "";
  position: absolute;
  right: -38px;
  bottom: -38px;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(0, 210, 208, 0.2), transparent 70%);
}

.explore-card--hot::after {
  background: radial-gradient(circle, rgba(255, 63, 125, 0.22), transparent 70%);
}

.explore-card__tag {
  font-size: 0.82rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--yellow);
}

.explore-card h3 {
  margin: 14px 0 0;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  letter-spacing: 0.02em;
  font-size: 2.2rem;
  line-height: 0.95;
}

.explore-card p {
  margin: 12px 0 0;
  color: var(--muted);
  line-height: 1.7;
}

.explore-card__cue {
  margin-top: auto;
  padding-top: 18px;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--teal);
  transition: color 180ms ease;
}

.explore-card:hover,
.explore-card:focus-visible {
  transform: translateY(-4px);
  border-color: rgba(0, 210, 208, 0.55);
}

.explore-card:hover .explore-card__cue,
.explore-card:focus-visible .explore-card__cue {
  color: var(--lime);
}

.cta-band {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 24px;
  padding: 26px 30px;
  border-radius: var(--radius-xl);
  background:
    linear-gradient(180deg, rgba(0, 210, 208, 0.1), rgba(255, 255, 255, 0.02)),
    var(--panel);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.cta-band h2 {
  margin: 0;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  letter-spacing: 0.02em;
  font-size: clamp(2rem, 3.6vw, 3.2rem);
  line-height: 0.95;
}

[data-reveal] {
  opacity: 0;
  translate: 0 20px;
  transition:
    opacity 640ms ease var(--reveal-delay, 0ms),
    translate 640ms ease var(--reveal-delay, 0ms);
}

[data-reveal].is-visible {
  opacity: 1;
  translate: 0 0;
}

.photo-frame,
.shelf-card {
  transition: transform 220ms ease, border-color 220ms ease;
}

.photo-frame:hover,
.shelf-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 210, 208, 0.45);
}

.photo-frame--tilt:hover {
  transform: rotate(-1.2deg) translateY(6px);
}

.site-footer__links a {
  transition: color 180ms ease;
}

.site-footer__links a:hover,
.site-footer__links a:focus-visible {
  color: var(--lime);
}

.pull-up,
.hours-block {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 20px;
  margin-top: 24px;
}

.pull-up__story,
.pull-up__note,
.hours-board,
.contact-block {
  padding: 26px;
  border-radius: var(--radius-xl);
}

.pull-up__story h2,
.section-head h2,
.contact-block h3 {
  font-size: clamp(2.4rem, 4vw, 4rem);
  line-height: 0.95;
}

.pull-up__note {
  transform: rotate(1.1deg);
}

.pull-up__note ul,
.contact-block ul {
  margin: 20px 0 0;
  padding-left: 18px;
}

.section-head {
  margin-bottom: 16px;
}

.section-head--tight {
  margin-bottom: 12px;
}

.photo-wall,
.shelves {
  margin-top: 24px;
}

.photo-wall__grid,
.shelves__grid {
  display: grid;
  gap: 18px;
}

.photo-wall__grid {
  grid-template-columns: repeat(3, 1fr);
}

.photo-frame {
  min-height: 260px;
  padding: 24px;
  border-radius: var(--radius-xl);
  background:
    linear-gradient(140deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)),
    rgba(15, 15, 15, 0.84);
}

.photo-frame::before {
  content: "";
  display: block;
  width: 90px;
  height: 12px;
  margin-bottom: 20px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.16), rgba(0, 210, 208, 0.45));
}

.photo-frame--tilt {
  transform: rotate(-1.2deg) translateY(10px);
}

.photo-frame h3 {
  margin-top: 16px;
  font-size: 2rem;
  line-height: 0.95;
}

.shelves__grid {
  grid-template-columns: repeat(4, 1fr);
}

.shelf-card {
  min-height: 220px;
  padding: 22px;
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.shelf-card::after {
  content: "";
  position: absolute;
  right: -38px;
  bottom: -38px;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(0, 210, 208, 0.2), transparent 70%);
}

.shelf-card--hot::after {
  background: radial-gradient(circle, rgba(255, 63, 125, 0.22), transparent 70%);
}

.shelf-card__tag {
  color: var(--yellow);
}

.shelf-card h3 {
  margin-top: 14px;
  font-size: 2rem;
  line-height: 0.95;
}

.hours-block {
  align-items: start;
}

.hours-board__top {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
}

.hours-board__timezone {
  color: var(--muted);
}

.hours-list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.hours-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 16px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.hours-list li:first-child {
  border-top: 0;
}

.hours-list li.active {
  padding-inline: 14px;
  border-radius: 18px;
  background: rgba(0, 210, 208, 0.12);
  border-top-color: transparent;
}

.hours-list span {
  color: var(--muted);
}

.hours-list strong {
  font-size: 1.02rem;
}

.contact-block {
  background:
    linear-gradient(180deg, rgba(255, 63, 125, 0.1), rgba(255, 255, 255, 0.02)),
    rgba(14, 14, 14, 0.9);
}

.contact-block .button {
  margin-top: 24px;
}

.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-top: 24px;
  padding: 24px 20px;
  border-radius: 24px;
}

.site-footer strong {
  font-size: 2rem;
}

.site-footer p {
  margin: 6px 0 0;
}

.site-footer__links {
  display: flex;
  gap: 16px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

@media (max-width: 1080px) {
  .hero,
  .pull-up,
  .hours-block,
  .shelves__grid {
    grid-template-columns: 1fr;
  }

  .explore__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .photo-wall__grid {
    grid-template-columns: 1fr;
  }

  .photo-frame--tilt,
  .pull-up__note,
  .logo-poster {
    transform: none;
  }
}

@media (max-width: 860px) {
  .page-shell {
    width: min(100% - 20px, 1180px);
  }

  .site-header {
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 28px;
  }

  .nav-toggle {
    display: flex;
    flex-shrink: 0;
  }

  .brand-chip {
    flex: 1;
    min-width: 0;
  }

  .site-nav {
    display: none;
    order: 3;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--line);
  }

  .site-nav.is-open {
    display: flex;
    animation: menu-in 220ms ease;
  }

  .site-nav a {
    padding: 12px 12px;
    border-radius: 14px;
  }

  .site-nav a::after {
    display: none;
  }

  .site-nav a:hover,
  .site-nav a:focus-visible,
  .site-nav a[aria-current="page"] {
    background: rgba(0, 210, 208, 0.12);
  }

  .header-cta {
    display: none;
    order: 4;
    width: 100%;
    margin-top: 10px;
  }

  .site-nav.is-open ~ .header-cta {
    display: inline-flex;
  }

  .hero,
  .page-hero,
  .pull-up__story,
  .pull-up__note,
  .hours-board,
  .contact-block,
  .cta-band {
    padding: 22px;
  }
}

@keyframes menu-in {
  from {
    opacity: 0;
    translate: 0 -6px;
  }
}

@media (max-width: 640px) {
  .age-gate__panel {
    padding: 22px 18px 24px;
  }

  .age-gate__form {
    grid-template-columns: 1fr;
  }

  .age-gate__actions,
  .hero__actions,
  .hero__tags,
  .site-footer {
    flex-direction: column;
  }

  .button,
  .hero__actions .button,
  .contact-block .button {
    width: 100%;
  }

  .hero {
    padding: 22px;
  }

  .hero h1 {
    font-size: clamp(3.1rem, 17vw, 5rem);
  }

  .hero h1 span {
    font-size: 1.3rem;
    max-width: 12ch;
  }

  .explore__grid {
    grid-template-columns: 1fr;
  }

  .cta-band {
    flex-direction: column;
    align-items: stretch;
  }

  .status-panel,
  .hours-board__top,
  .site-footer {
    align-items: start;
    flex-direction: column;
  }

  .site-footer__links {
    flex-wrap: wrap;
  }

  .hours-list li {
    flex-direction: column;
    align-items: start;
    gap: 6px;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .ticker__track {
    animation: none;
  }

  .button {
    transition: none;
  }

  [data-reveal] {
    opacity: 1;
    translate: none;
    transition: none;
  }

  .site-nav.is-open {
    animation: none;
  }

  .explore-card,
  .photo-frame,
  .shelf-card,
  .site-nav a,
  .nav-toggle,
  .nav-toggle__bar {
    transition: none;
  }

  .explore-card:hover,
  .photo-frame:hover,
  .shelf-card:hover {
    transform: none;
  }
}
