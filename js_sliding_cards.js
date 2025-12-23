/* ========================================================= SLIDING-CARDS-JSCODE =========================================================== */

const container = document.getElementById("cardContainer");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const wrapper = document.getElementById("sliderWrapper");

// Scroll one card
function scrollOne(dir) {
  const card = container.querySelector(".card");
  const gap = parseFloat(getComputedStyle(container).gap) || 30;
  const amount = (card.offsetWidth + gap) * dir;
  container.scrollBy({ left: amount, behavior: "smooth" });
}

btnLeft.onclick = () => scrollOne(-1);
btnRight.onclick = () => scrollOne(1);

// Show arrows on hover (desktop)
wrapper.addEventListener("mouseenter", () => {
  wrapper.classList.add("show-arrows");
});
wrapper.addEventListener("mouseleave", () => {
  wrapper.classList.remove("show-arrows");
});

// Show arrows for 2.4s on touch (mobile)
let timer;
container.addEventListener("touchstart", () => {
  wrapper.classList.add("show-arrows");
  clearTimeout(timer);
  timer = setTimeout(() => wrapper.classList.remove("show-arrows"), 2400);
});

// DO NOT hide arrows — always visible
function updateEdges() {
  btnLeft.style.visibility = "visible";
  btnRight.style.visibility = "visible";
}

container.addEventListener("scroll", updateEdges);
window.addEventListener("resize", updateEdges);
updateEdges();



















