/* =================================================== PRODUCTS-JSCODE ====================================================== */

const sliderTrack = document.getElementById("sliderTrack");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

// width of one card (your card width = 400 + gap 30 = approx 430)
const slideAmount = 430;

rightBtn.addEventListener("click", () => {
  sliderTrack.scrollBy({
    left: slideAmount,
    behavior: "smooth"
  });
});

leftBtn.addEventListener("click", () => {
  sliderTrack.scrollBy({
    left: -slideAmount,
    behavior: "smooth"
  });
});
