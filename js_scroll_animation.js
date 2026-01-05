/* ------------------ SCROLL ANIMATION ------------- */

/* ================= SPEED CONTROLS ================= */

const SPEED = {
  wordDelay: 120,
  wordAnim: 0.8,
  sectionAnim: 1.25,
  tiltStrength: 7,
  tiltEase: 0.08,
  buttonMove: 4
};

/* -------------------------------
   WORD BY WORD TEXT REVEAL
-------------------------------- */
function textReveal(selector) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(el => {
    const words = el.innerText.split(" ");
    el.innerHTML = words
      .map(word => `<span class="word">${word}</span>`)
      .join(" ");

    const spans = el.querySelectorAll(".word");
    spans.forEach(span => {
      span.style.opacity = 0;
      span.style.transform = "translateY(18px)";
      span.style.display = "inline-block";
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          spans.forEach((span, i) => {
            setTimeout(() => {
              span.style.transition =
                `opacity ${SPEED.wordAnim}s cubic-bezier(.22,.61,.36,1),
                 transform ${SPEED.wordAnim}s cubic-bezier(.22,.61,.36,1)`;
              span.style.opacity = 1;
              span.style.transform = "translateY(0)";
            }, i * SPEED.wordDelay);
          });
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.6 });

    observer.observe(el);
  });
}

/* Apply text reveals */
textReveal(".hero-content h1");
textReveal(".hero-content h2");
textReveal(".Air-content h2");
textReveal(".watch-content h2");
textReveal(".main-title h2");

/* -------------------------------
   SECTION FADE-UP ON SCROLL
-------------------------------- */
const revealEls = document.querySelectorAll(
  "section, .product-card"
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  el.style.transition =
    `opacity ${SPEED.sectionAnim}s cubic-bezier(.22,.61,.36,1),
     transform ${SPEED.sectionAnim}s cubic-bezier(.22,.61,.36,1)`;
  revealObserver.observe(el);
});

/* -------------------------------
   3D TILT (DESKTOP ONLY – SAFE)
-------------------------------- */
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.querySelectorAll(".card, .product-card").forEach(card => {
    let cx = 0, cy = 0, tx = 0, ty = 0;
    let active = false;

    function animateTilt() {
      if (!active) return;

      cx += (tx - cx) * SPEED.tiltEase;
      cy += (ty - cy) * SPEED.tiltEase;

      card.style.transform =
        `perspective(1000px)
         rotateX(${cx}deg)
         rotateY(${cy}deg)`;

      requestAnimationFrame(animateTilt);
    }

    card.addEventListener("mouseenter", () => {
      active = true;
      animateTilt();
    });

    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      tx = -(e.clientY - r.top) / r.height * SPEED.tiltStrength + SPEED.tiltStrength / 2;
      ty = (e.clientX - r.left) / r.width * SPEED.tiltStrength - SPEED.tiltStrength / 2;
    });

    card.addEventListener("mouseleave", () => {
      active = false;
      tx = 0;
      ty = 0;
      card.style.transform = "none";
    });
  });
}

/* -------------------------------
   STICKY BUY BUTTON SCROLL (OPTIMIZED)
-------------------------------- */
let lastScroll = window.scrollY;
let ticking = false;

const buyButtons = document.querySelectorAll(
  ".h2-btn, .cta-2-btn, .add-btn"
);

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const current = window.scrollY;
      const down = current > lastScroll;

      buyButtons.forEach(btn => {
        btn.style.transform = down
          ? `translateY(${SPEED.buttonMove}px)`
          : "translateY(0)";
      });

      lastScroll = current;
      ticking = false;
    });

    ticking = true;
  }
});
