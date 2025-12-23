function initBag() {
  const bagIcon = document.getElementById("bagIcon");
  const bagDropdown = document.getElementById("bagDropdown");
  const bagCount = document.getElementById("bagCount");
  const bagEmpty = document.getElementById("bagEmpty");
  const bagItems = document.getElementById("bagItems");

  // 🔒 Safety check FIRST
  if (!bagIcon || !bagDropdown || !bagCount || !bagEmpty || !bagItems) return;

  // now safe to query inside
  const emptyTitle = bagEmpty.querySelector(".empty-title");
  const emptySub = bagEmpty.querySelector(".empty-sub");

  // 🧠 In-memory bag (NO localStorage)
  let bag = [];

  /* -------- RENDER BAG -------- */
  function renderBag() {
    bagItems.innerHTML = "";

    if (bag.length === 0) {
      bagItems.style.display = "none";
      bagCount.style.display = "none";
      emptyTitle.style.display = "block";
      emptySub.style.display = "block";
      return;
    }

    bagItems.style.display = "flex";
    bagCount.style.display = "flex";
    bagCount.textContent = bag.length;
    emptyTitle.style.display = "none";
    emptySub.style.display = "none";

    bag.forEach((item) => {
      const div = document.createElement("div");
      div.className = "bag-item";
      div.innerHTML = `
        <div class="bag-img-wrap">
          <img src="${item.image}" alt="${item.name}">
          <p class="bag-item-name">${item.name}</p>
        </div>
      `;
      bagItems.appendChild(div);
    });
  }

  /* -------- BAG TOGGLE -------- */
  bagIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    bagDropdown.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!bagDropdown.contains(e.target) && !bagIcon.contains(e.target)) {
      bagDropdown.classList.remove("active");
    }
  });

  /* -------- ADD TO BAG (GLOBAL) -------- */
  window.addToBag = function (button) {
    const section = button.closest(".product-details");
    if (!section) return;

    const item = {
      name: section.querySelector(".intro-title")?.innerText || "Product",
      image: section.querySelector(".main-product-img")?.src || ""
    };

    bag.push(item);
    renderBag();
  };

  // initial UI
  renderBag();
}
