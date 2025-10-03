// ========================
// Animated Counters for Portfolio
// ========================
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / 80);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + '+';
      }
    };
    updateCount();
  });
}
if (document.querySelector('.counters')) {
  window.addEventListener('DOMContentLoaded', animateCounters);
}
// ========================
// Lottie Animation in Hero
// ========================
document.addEventListener('DOMContentLoaded', function() {
  var lottieContainer = document.getElementById('lottie-hero');
  if (lottieContainer) {
    lottie.loadAnimation({
      container: lottieContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets10.lottiefiles.com/packages/lf20_kyu7xb1v.json' // Modern web animation
    });
  }
});
// ========================
// Parallax Scrolling for Hero Background
// ========================
window.addEventListener('scroll', function() {
  const heroBg = document.querySelector('.hero-bg-parallax');
  if (heroBg) {
    const scrolled = window.scrollY;
    heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroBg.style.opacity = 0.25 + Math.max(0, 1 - scrolled / 600) * 0.25;
  }
});
// ========================
// Mobile Navbar Hamburger Toggle
// ========================
document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function() {
      navLinks.classList.toggle("open");
    });
  }
});
// Floating chat widget logic removed as per user request
// ========================
// Hero animations
// ========================
gsap.from(".hero h1", { duration: 1, y: -60, opacity: 0, ease: "power3.out" });
gsap.from(".hero p", { duration: 1, delay: 0.3, y: 40, opacity: 0, ease: "power3.out" });
gsap.from(".btn", { duration: 1, delay: 0.6, scale: 0, ease: "back.out(1.7)" });

// ========================
// Portfolio cards animation (with ScrollTrigger)
// ========================
if (document.querySelector(".cards")) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".card", {
    scrollTrigger: {
      trigger: ".cards",
      start: "top 80%"
    },
    duration: 1,
    opacity: 0,
    y: 80,
    stagger: 0.2,
    ease: "power2.out"
  });
}

// ========================
// Dark/Light Mode Toggle
// ========================
const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  if (toggleBtn) toggleBtn.textContent = "☀️";
} else {
  if (toggleBtn) toggleBtn.textContent = "🌙";
}

// Toggle event (only if button exists)
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";

    // Smooth fade animation on toggle
    gsap.fromTo(
      body,
      { opacity: 0.7 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  });
}

// ========================
// Portfolio Filter System
// ========================
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");

      cards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "flex"; // show
          gsap.fromTo(card, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 });
        } else {
          card.style.display = "none"; // hide
        }
      });
    });
  });
}

