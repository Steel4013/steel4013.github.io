"use strict";
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const EMAIL = "noahgsbusiness@gmail.com";

const STATS = [
  { n: 80, label: "person roster tracked by automated workflows" },
  { n: 19000, suffix: "+", label: "log entries indexed in an archiving prototype" },
  { n: 477, label: "cached UI items optimized in a web portal" },
  { n: 8, suffix: "+", label: "hours of manual review saved per cycle" },
];

const EXP = [
  { title: "Frontend architecture with Angular Signals", sub: "TypeScript | Angular 21 | 5-person team",
    points: ["Migrated the local data stores of an internal web portal to Angular Signals, restructuring its change-detection architecture.",
             "Optimized and debugged UI behavior across up to 477 cached application items.",
             "Used an AI suite (GitHub Copilot, Claude, Grok, ChatGPT/Codex) to speed up troubleshooting while collaborating with four teammates."],
    tags: ["TypeScript", "Angular", "AI-assisted dev"] },
  { title: "Approval workflows and CI/CD", sub: "C# | Microsoft DevOps",
    points: ["Architected a temporary-duty (TDY) approval pipeline with multi-tier status notifications across 3-4 IPT leads and 2 fund managers.",
             "Researched Singleton dependency injection patterns to refactor the C# application email service.",
             "Ran a daily Git workflow (push, pull, merge, commit) from Visual Studio into Microsoft DevOps."],
    tags: ["C#", "Git and DevOps"] },
  { title: "Database archiving and query optimization", sub: "C# | MongoDB",
    points: ["Prototyped a MongoDB system-log archiving sequence that indexes, sorts, and filters 19,000+ backend entries.",
             "Built 30-day extraction logic that writes localized CSV backups and moves outdated logs into archive collections to prevent backend bloat."],
    tags: ["C#", "MongoDB", "Databases"] },
  { title: "Identity validation and backend AI integration", sub: "TypeScript | C#",
    points: ["Synced frontend Data Transfer Objects with backend models.",
             "Used Visual Studio 2022 Agent mode with multi-model AI prompting to deploy string-parsing and email-validation logic.",
             "Implemented matching algorithms that validate new registration requests against the existing employee database."],
    tags: ["TypeScript", "C#", "AI-assisted dev"] },
  { title: "Flight data analysis tooling", sub: "Python | Tkinter | SQLite | Matplotlib",
    points: ["Engineered 5 modular Python scripts and an executable batch file into a GUI analyzer that automates comparison and gap analysis between two large datasets.",
             "Used an autocomplete tool that parses CSV data, saving an estimated 8+ hours of manual review.",
             "Planning optimizations to related SQLite-backed analytical tools with Matplotlib visualization."],
    tags: ["Python", "Databases", "Data analysis"] },
  { title: "Compliance automation", sub: "Microsoft Power Automate",
    points: ["Built and maintain two automated email-response pipelines that track annual training completion across an 80-person roster.",
             "Wrote logic that formats notifications with direct hyperlinks and automatic UTC-to-EST time conversion, removing manual tracking."],
    tags: ["Power Automate", "Automation"] },
  { title: "Radar modeling and RF validation", sub: "Signal processing | spectrum analysis",
    points: ["Profiled radar emitters and mapped RF parameters into structured spreadsheet matrices to support simulation building and spectrum analysis.",
             "Configured emitter models and validated their outputs on spectrum analyzers, testing scan behavior against expected physics.",
             "Passed a formal technical evaluation covering radar parametrics such as pulse repetition interval, pulse duration, and antenna beamwidth."],
    tags: ["RF and signals", "Excel"] },
  { title: "Technical writing and instruction", sub: "SOPs | briefings | training",
    points: ["Authored standard operating procedures for security administration and shipping of high-value materiel.",
             "Turned a 15-page technical report on advanced radar systems into a briefing for squadron engineers.",
             "Completed 9 intensive training modules on radar physics and signal propagation."],
    tags: ["Technical writing", "RF and signals"] },
];

const PROJ = [
  { title: "Prediction-market arbitrage bot", sub: "Python | machine learning | reinforcement learning",
    points: ["Researches pricing gaps on Kalshi and evaluates trades using ML and reinforcement-learning techniques."],
    tags: ["Python", "Machine learning", "Finance"], link: "https://github.com/Steel4013/kalshi-arb" },
  { title: "Price-drop alert bot", sub: "Python | web monitoring",
    points: ["Monitors TCGPlayer listings for a target product and alerts me when the price drops to my threshold."],
    tags: ["Python", "Automation"], link: "https://github.com/Steel4013/tcg_one_piece_sniper" },
  { title: "Phone-as-TV-remote", sub: "Python | local networking",
    points: ["A Python server hosted on my Mac that turns my phone into a Samsung TV remote over the local network."],
    tags: ["Python", "Networking"], link: "https://github.com/Steel4013" },
];

const EDU = [
  { title: "Deep learning and autonomous reinforcement learning", sub: "CAP 4613",
    points: ["Analyzed deep-learning math trade-offs using Taylor series and inverse Hessian matrices.",
             "Built Markov Decision Process models with Bellman equations and deep neural networks to generalize continuous spaces."],
    tags: ["Machine learning"] },
  { title: "Hardware architecture and logic", sub: "CDA 3100 / 4150",
    points: ["Modeled ASIC/FPGA logic gates and custom 32-bit MIPS processor datapaths.",
             "Developed mathematical hazard models to eliminate instruction latency and out-of-order execution stalls."],
    tags: ["Hardware and logic"] },
  { title: "Enterprise software and networking", sub: "CEN 4020 / COP 4603",
    points: ["Co-developed GitHub CI/CD pipelines to track feature work for a 5-person agile team.",
             "Analyzed campus routing matrices and physical topologies to evaluate network transport constraints."],
    tags: ["Git and DevOps", "Networking"] },
  { title: "Asset management and corporate valuation", sub: "FIN 4934 / ACG 3171",
    points: ["Used FactSet for risk-adjusted portfolio benchmarking (Alpha and Beta).",
             "Built accounting ledgers to compute tangible asset capitalization."],
    tags: ["Finance", "Excel"] },
];

/* ---------- content rendering ---------- */
let active = null;
const rowHTML = (i, idx) => `
  <article class="row" data-tags="${i.tags.join("|")}">
    <button class="row-head" aria-expanded="false">
      <span class="mono">${String(idx + 1).padStart(2, "0")}</span>
      <span class="rt">${i.title}</span>
      <span class="mono rs">${i.sub}</span>
      <span class="plus" aria-hidden="true">+</span>
    </button>
    <div class="row-body"><div class="inner">
      <ul>${i.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      ${i.link ? `<p><a href="${i.link}" target="_blank" rel="noopener">View on GitHub</a></p>` : ""}
      <div class="tags">${i.tags.map((t) => `<button class="chip" data-tag="${t}">${t}</button>`).join("")}</div>
    </div></div>
  </article>`;
$("#exp").innerHTML = EXP.map(rowHTML).join("");
$("#proj").innerHTML = PROJ.map(rowHTML).join("");
$("#edu").innerHTML = EDU.map(rowHTML).join("");

const counts = {};
[...EXP, ...PROJ, ...EDU].forEach((i) => i.tags.forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
$("#chips").innerHTML = Object.keys(counts)
  .sort((a, b) => counts[b] - counts[a] || a.localeCompare(b))
  .map((t) => `<button class="chip" data-tag="${t}">${t}<span>${counts[t]}</span></button>`).join("");

function setOpen(row, open) {
  row.classList.toggle("open", open);
  row.querySelector(".row-head").setAttribute("aria-expanded", String(open));
}
function applyFilter(tag) {
  active = tag === active ? null : tag;
  $$(".row").forEach((r) => {
    const hit = !active || r.dataset.tags.split("|").includes(active);
    r.classList.toggle("dim", !hit);
    setOpen(r, Boolean(active) && hit);
  });
  $$("[data-tag]").forEach((b) => b.classList.toggle("on", b.dataset.tag === active));
  $("#status").textContent = active ? "Highlighting work that uses: " + active : "";
}
document.addEventListener("click", (e) => {
  const tag = e.target.closest("[data-tag]");
  if (tag) return applyFilter(tag.dataset.tag);
  const head = e.target.closest(".row-head");
  if (head) setOpen(head.parentElement, !head.parentElement.classList.contains("open"));
});

/* ---------- headline letters, marquee, stats ---------- */
let letter = 0;
$$(".split").forEach((el) => {
  el.innerHTML = [...el.textContent].map((c) => `<span class="ch" style="--i:${letter++}">${c}</span>`).join("");
});
const WORDS = ["Python", "C#", "TypeScript", "Angular", "MongoDB", "RF signals", "Machine learning", "Automation", "Finance"];
const track = $("#track");
track.innerHTML = WORDS.map((w) => `<span>${w}</span>`).join("").repeat(2);
const marquee = track.animate([{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }], { duration: 40000, iterations: Infinity });
if (reduce) marquee.pause();

$("#stats").innerHTML = STATS.map(
  (s) => `<div class="stat"><b data-to="${s.n}" data-suffix="${s.suffix || ""}">0</b><span>${s.label}</span></div>`
).join("");
function countUp(el) {
  const to = Number(el.dataset.to), suffix = el.dataset.suffix;
  if (reduce) { el.textContent = to.toLocaleString() + suffix; return; }
  let start;
  const step = (t) => {
    start = start || t;
    const p = Math.min((t - start) / 1400, 1);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
const counter = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { counter.unobserve(e.target); countUp(e.target); }
}), { threshold: 0.6 });
$$("[data-to]").forEach((n) => counter.observe(n));

/* ---------- scroll reveal, nav highlight, progress ---------- */
const reveal = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); }
}), { threshold: 0.08 });
$$(".rv").forEach((el) => reveal.observe(el));

const navLinks = $$(".nav nav a");
const spy = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach((s) => spy.observe(s));

let lastY = scrollY, vel = 0;
addEventListener("scroll", () => {
  const max = root.scrollHeight - innerHeight;
  $("#progress").style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  vel = scrollY - lastY;
  lastY = scrollY;
}, { passive: true });

/* ---------- radar scope (canvas) ---------- */
const cv = $("#radar"), ctx = cv.getContext("2d"), hero = $(".hero");
const TAU = Math.PI * 2, G = "141,255,122";
let W = 0, H = 0, mx = 0.5, my = 0.5, heroVisible = true;
const blips = Array.from({ length: 16 }, () => ({ a: Math.random() * TAU, r: 0.12 + Math.random() * 0.85, lit: 0 }));
const pings = [];

function drawRadar(t) {
  ctx.clearRect(0, 0, W, H);
  const cx = W * (W < 720 ? 0.5 : 0.7) + (mx - 0.5) * 30, cy = H * 0.48 + (my - 0.5) * 30, R = Math.min(W, H) * 0.6;
  ctx.lineWidth = 1;
  ctx.strokeStyle = `rgba(${G},.14)`;
  for (let i = 1; i <= 5; i++) { ctx.beginPath(); ctx.arc(cx, cy, (R * i) / 5, 0, TAU); ctx.stroke(); }
  ctx.beginPath();
  ctx.moveTo(cx - R, cy); ctx.lineTo(cx + R, cy); ctx.moveTo(cx, cy - R); ctx.lineTo(cx, cy + R);
  ctx.stroke();
  const ang = ((t / 1000) * 0.9) % TAU;
  if (ctx.createConicGradient) {
    const g = ctx.createConicGradient(ang - 1.2, cx, cy);
    g.addColorStop(0, `rgba(${G},0)`);
    g.addColorStop(0.19, `rgba(${G},.28)`);
    g.addColorStop(0.1901, `rgba(${G},0)`);
    g.addColorStop(1, `rgba(${G},0)`);
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.fill();
  }
  ctx.strokeStyle = `rgba(${G},.9)`;
  ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + R * Math.cos(ang), cy + R * Math.sin(ang)); ctx.stroke();
  for (const b of blips) {
    if ((ang - b.a + TAU) % TAU < 0.1) b.lit = 1;
    b.lit *= 0.99;
    ctx.fillStyle = `rgba(${G},${0.12 + b.lit * 0.88})`;
    ctx.beginPath(); ctx.arc(cx + R * b.r * Math.cos(b.a), cy + R * b.r * Math.sin(b.a), 2 + b.lit * 5, 0, TAU); ctx.fill();
  }
  const now = performance.now();
  for (let i = pings.length - 1; i >= 0; i--) {
    const age = (now - pings[i].t0) / 1000;
    if (age > 2) { pings.splice(i, 1); continue; }
    ctx.strokeStyle = `rgba(${G},${1 - age / 2})`;
    ctx.beginPath(); ctx.arc(pings[i].x, pings[i].y, age * 220, 0, TAU); ctx.stroke();
  }
}
function resize() {
  const d = Math.min(devicePixelRatio || 1, 2);
  W = hero.clientWidth; H = hero.clientHeight;
  cv.width = W * d; cv.height = H * d;
  ctx.setTransform(d, 0, 0, d, 0, 0);
  if (reduce) drawRadar(2500);
}
addEventListener("resize", resize);
resize();
hero.addEventListener("mousemove", (e) => {
  const r = hero.getBoundingClientRect();
  mx = (e.clientX - r.left) / r.width; my = (e.clientY - r.top) / r.height;
});
hero.addEventListener("click", (e) => {
  const r = hero.getBoundingClientRect();
  pings.push({ x: e.clientX - r.left, y: e.clientY - r.top, t0: performance.now() });
});
new IntersectionObserver((es) => (heroVisible = es[0].isIntersecting)).observe(hero);

/* ---------- cursor, magnetic buttons, one animation loop ---------- */
const dot = $("#dot"), ring = $("#ring");
let px = 0, py = 0, rx = 0, ry = 0, rate = 1;
if (matchMedia("(pointer: fine)").matches) {
  root.classList.add("has-cursor");
  addEventListener("mousemove", (e) => { px = e.clientX; py = e.clientY; dot.style.transform = `translate(${px}px,${py}px)`; });
  document.addEventListener("mouseover", (e) => root.classList.toggle("hov", Boolean(e.target.closest("a,button"))));
  $$(".mag").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px,${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    });
    el.addEventListener("mouseleave", () => (el.style.transform = ""));
  });
}
function frame(t) {
  rx += (px - rx) * 0.16; ry += (py - ry) * 0.16;
  ring.style.transform = `translate(${rx}px,${ry}px)`;
  rate += (Math.min(1 + Math.abs(vel) * 0.25, 10) - rate) * 0.08;
  vel *= 0.9;
  if (!reduce) marquee.playbackRate = rate;
  if (heroVisible && !reduce) drawRadar(t);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

/* ---------- small utilities ---------- */
$("#copy").addEventListener("click", async (e) => {
  const btn = e.currentTarget;
  try { await navigator.clipboard.writeText(EMAIL); btn.textContent = "Copied!"; }
  catch (err) { btn.textContent = EMAIL; }
  setTimeout(() => (btn.textContent = "Copy email"), 2000);
});
const tickClock = () => {
  $("#clock").textContent = "Fort Walton Beach " +
    new Date().toLocaleTimeString("en-US", { timeZone: "America/Chicago", hour: "2-digit", minute: "2-digit" }) + " CT";
};
tickClock(); setInterval(tickClock, 30000);

/* ---------- loader ---------- */
function finishLoad() { $("#loader").classList.add("done"); root.classList.add("ready"); }
if (reduce) { $("#loadnum").textContent = "100"; finishLoad(); }
else {
  let n = 0;
  const timer = setInterval(() => {
    n = Math.min(100, n + Math.ceil(Math.random() * 9));
    $("#loadnum").textContent = n;
    if (n === 100) { clearInterval(timer); setTimeout(finishLoad, 250); }
  }, 40);
  setTimeout(finishLoad, 4000);
}
