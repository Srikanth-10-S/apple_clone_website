
/* ---------------------- SCROLL ANIMATION ------*/

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     GLOBAL EASING
  ========================= */
  const EASE = "cubic-bezier(.22,.61,.36,1)";

  /* =========================
     WORD BY WORD REVEAL
  ========================= */
  function wordReveal(selector) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
      if (el.dataset.wordAnimated) return;
      el.dataset.wordAnimated = "true";

      const text = el.innerText.trim();
      if (!text) return;

      const words = text.split(" ");
      el.innerHTML = words
        .map(w => `<span class="word-span">${w}</span>`)
        .join(" ");

      const spans = el.querySelectorAll(".word-span");

      spans.forEach(span => {
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(18px)";
        span.style.transition =
          `opacity .8s ${EASE}, transform .8s ${EASE}`;
      });

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            spans.forEach((span, i) => {
              setTimeout(() => {
                span.style.opacity = "1";
                span.style.transform = "translateY(0)";
              }, i * 130);
            });
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.6 });

      observer.observe(el);
    });
  }

  /* APPLY WORD REVEAL */
  wordReveal("h1, h2, h3, .main-title, .hero-text, .word-reveal");

  /* =========================
     SECTION FADE + FLOAT-IN
  ========================= */
  const sections = document.querySelectorAll(
    "section, .box-card, .more-card, .iphone-card, .card"
  );

  if (sections.length) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          sectionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    sections.forEach(el => {
      el.style.opacity = "0";
      el.style.transform = "translateY(36px)";
      el.style.transition =
        `opacity 1s ${EASE}, transform 1s ${EASE}`;
      sectionObserver.observe(el);
    });
  }

  /* =========================
     IMAGE SOFT ZOOM-IN
  ========================= */
  document.querySelectorAll(".main-product-img").forEach(img => {
    img.style.opacity = "0";
    img.style.transform = "scale(0.96)";
    img.style.transition =
      `opacity 1s ${EASE}, transform 1s ${EASE}`;

    requestAnimationFrame(() => {
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
    });
  });

  /* =========================
     DESKTOP HOVER FLOAT
  ========================= */
  if (window.innerWidth > 900) {
    document.querySelectorAll(".img-box, .card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.style.transition =
          `transform .35s ${EASE}, box-shadow .35s ${EASE}`;
        card.style.transform = "translateY(-6px)";
        card.style.boxShadow = "0 18px 40px rgba(0,0,0,.15)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
      });
    });
  }

  /* =========================
     BUTTON MICRO-INTERACTIONS
  ========================= */
  document.querySelectorAll("button, .add-btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.04)";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });

    btn.addEventListener("mousedown", () => {
      btn.style.transform = "scale(0.95)";
    });

    btn.addEventListener("mouseup", () => {
      btn.style.transform = "scale(1.04)";
    });
  });

});