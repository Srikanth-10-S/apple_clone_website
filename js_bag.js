    /* =============================== BAG JS CODE =============================== */

document.addEventListener("DOMContentLoaded", initBag);

function initBag() {
  const bagIcon = document.getElementById("bagIcon");
  const bagDropdown = document.getElementById("bagDropdown");
  const bagCount = document.getElementById("bagCount");

  if (!bagDropdown) return;

  const bagPreviewImages = document.getElementById("bagPreviewImages");
  const emptyTitle = bagDropdown.querySelector(".empty-title");
  const emptySub = bagDropdown.querySelector(".empty-sub");
  const topRow = bagDropdown.querySelector(".bag-top-row");
  const reviewBtn = bagDropdown.querySelector(".bag-preview-btn");

  /* ===============================
     GLOBAL BAG
  =============================== */
  window.AppleBag = {
    items: JSON.parse(localStorage.getItem("appleBag")) || [],

    save() {
      localStorage.setItem("appleBag", JSON.stringify(this.items));
    },

    /* ===============================
       ADD ITEM
    =============================== */
    add(newItem) {
      const existing = this.items.find(
        item => item.name === newItem.name
      );

      if (existing) {
        existing.qty += 1;
      } else {
        this.items.push({
          name: newItem.name,
          image: newItem.image,
          price: Number(newItem.price),
          qty: 1
        });
      }

      this.save();
      this.render();
    },

    /* ===============================
       RENDER BAG PREVIEW
    =============================== */
    render() {
      bagPreviewImages.innerHTML = "";

      // EMPTY STATE
      if (this.items.length === 0) {
        if (bagCount) bagCount.style.display = "none";
        if (topRow) topRow.style.display = "none";
        if (reviewBtn) reviewBtn.style.display = "none";
        if (emptyTitle) emptyTitle.style.display = "block";
        if (emptySub) emptySub.style.display = "block";
        return;
      }

      if (emptyTitle) emptyTitle.style.display = "none";
      if (emptySub) emptySub.style.display = "none";
      if (topRow) topRow.style.display = "flex";
      if (reviewBtn) reviewBtn.style.display = "inline-flex";

      // BAG COUNT
      if (bagCount) {
        bagCount.style.display = "flex";
        bagCount.textContent = this.items.reduce(
          (sum, item) => sum + item.qty,
          0
        );
      }

      const maxVisible = 3;
      const visibleItems = this.items.slice(0, maxVisible);

      // SHOW ONLY FIRST 3 ITEMS
      visibleItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "bag-preview-item";

        div.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="bag-preview-text">
            <div class="bag-preview-name">${item.name}</div>
            ${item.qty > 1 ? `<div class="bag-preview-qty">× ${item.qty}</div>` : ""}
          </div>
        `;

        bagPreviewImages.appendChild(div);
      });

      // "+ MORE ITEMS" TEXT (BELOW LAST ITEM)
      let moreText = document.getElementById("bagMoreText");
      if (!moreText) {
        moreText = document.createElement("p");
        moreText.id = "bagMoreText";
        moreText.className = "bag-more-text";
      }

      const extraCount = this.items.length - maxVisible;

      if (extraCount > 0) {
        moreText.textContent =
          ` ${extraCount} more item${extraCount > 1 ? "s" : ""} in your bag`;
        moreText.style.display = "block";
        bagPreviewImages.appendChild(moreText);
      } else {
        moreText.style.display = "none";
      }
    }
  };

  /* ===============================
     BAG TOGGLE
  =============================== */
  if (bagIcon) {
    bagIcon.addEventListener("click", e => {
      e.stopPropagation();
      bagDropdown.classList.toggle("active");
    });
  }

  document.addEventListener("click", e => {
    if (!bagDropdown.contains(e.target) && !bagIcon?.contains(e.target)) {
      bagDropdown.classList.remove("active");
    }
  });

  /* ===============================
     ADD TO BAG (BUTTON)
  =============================== */
  window.addToBag = function (button) {
    const section = button.closest(".product-details");
    if (!section) return;

    const priceEl = section.querySelector(".price");
    const price = Number(priceEl?.dataset.price || 0);

    const item = {
      name: section.querySelector(".intro-title")?.innerText || "Product",
      image: section.querySelector(".main-product-img")?.src || "",
      price
    };

    AppleBag.add(item);
    bagDropdown.classList.add("active");
  };

  AppleBag.render();
}
