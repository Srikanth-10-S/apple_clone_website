/* ================= DROPDOWN & SEARCH JS ================= */

/* ===== MENU DATA ===== */
const menus = {
  Store: [

       { title: "Shop", big: true, items: [
        ["Shop the Latest", "inside_page_17air.html"],
        ["Mac", "inside_page_mac.html"],
        ["iPad", "inside_page_ipad.html"],
        ["iPhone", "inside_page_17pro.html"],
        ["Apple Watch", "inside_page_watch.html"],
        ["AirPods", "inside_page_pods.html"],
        ["Accessories", "#"]
      ]
    },
    { title: "Quick Links", items: ["Find a Store", "Order Status", "Apple Trade In", "Ways to Buy", "Personal Setup"] },
    { title: "Shop Special Stores", items: ["Education", "Business"] }
  ],

  Mac: [
    { title: "Explore All Mac", big: true, items: ["MacBook Pro", "MacBook Air", "iMac", "Mac mini", "Mac Studio", "Displays"] },
    { title: "Shop Mac", items: ["Find a Store", "Order Status", "Ways to Buy"] },
    { title: "More from Mac", items: ["Mac Support", "AppleCare", "Mac Privacy", "Apps by Apple", "iCloud+"] }
  ],

  iPad: [
    { title: "Explore All iPads", big: true, items: ["iPad Pro", "iPad Air", "iPad", "iPad mini", "Apple Pencil"] },
    { title: "Shop iPad", items: ["Find a Store", "Order Status", "Ways to Buy"] },
    { title: "More from iPad", items: ["iSupport", "AppleCare", "Mac Privacy", "Apps by Apple", "iCloud+"] }
  ],

  iPhone: [
    { title: "Explore All iPhones", big: true, items: ["iPhone 17 Pro", "iPhone 17 Pro Max", "iPhone 17 Air", "iPhone 17", "iPhone 16", "iPhone 16e"] },
    { title: "Shop iPhone", items: ["Find a Store", "Order Status", "Ways to Buy"] },
    { title: "More from iPhone", items: ["iSupport", "AppleCare", "Mac Privacy", "Apps by Apple"] }
  ],

  Watch: [
    { title: "Explore All Apple Watch", big: true, items: ["Series 11", "SE 3", "Ultra 3", "Ultra 4", "Nike"] },
    { title: "Shop Watch", items: ["Find a Store", "Order Status", "Ways to Buy"] },
    { title: "Shop for Watches", items: ["Apple Watch Support", "AppleCare", "Mac Privacy", "Apps by Apple"] }
  ],

  AirPods: [
    { title: "Explore All AirPods", big: true, items: ["AirPods 4", "AirPods Pro 3", "AirPods Max"] },
    { title: "Shop AirPods", items: ["AirPods Accessories", "Shop AirPods", "Ways to Buy"] },
    { title: "More from AirPods", items: ["AirPods Support", "AppleCare", "Mac Privacy", "Apps by Apple"] }
  ],

  AppleTV: [
    { title: "Explore Apple TV", big: true, items: ["Apple TV 4K", "HomePod", "HomePod mini"] },
    { title: "Shop TV", items: ["Shop Apple TV", "Shop HomePod", "Shop Siri Remote"] },
    { title: "More from Apple TV", items: ["Apple TV Support", "AppleCare"] }
  ],

  Accessories: [
    { title: "Shop All Accessories", big: true, items: ["Mac", "iPad", "iPhone", "Apple TV+", "HomePod mini", "Apple Watch"] },
    { title: "Explore Accessories", items: ["Made by Apple", "Beats", "AirTag"] }
  ],

  Entertainment: [
    { title: "Explore Entertainment", big: true, items: ["Apple One", "Apple TV+", "HomePod mini"] },
    { title: "Support", items: ["Apple TV+ Support", "Apple Music Support"] }
  ],

  Support: [
    { title: "Explore Support", big: true, items: ["iPhone", "Mac", "iPad", "Apple TV+", "HomePod mini"] },
    { title: "Get Help", items: ["Community", "Check Coverage", "Repair"] },
    { title: "Help Topics", items: ["Billing & Subscription", "Accessibility"] }
  ]
};

/* ================= DROPDOWN INIT ================= */
function initDropdown() {
  const dropdown = document.getElementById("mainDropdown");
  const content = document.getElementById("dropdownContent");

  if (!dropdown || !content) return;

  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
      const menu = menus[item.textContent.trim()];
      if (!menu) return;

      content.innerHTML = menu.map(col => `
        <div class="${col.big ? "col-shop" : "col"}">
          <h4>${col.title}</h4>
          ${col.items.map(i =>
            Array.isArray(i)
              ? `<a href="${i[1]}">${i[0]}</a>`
              : `<a href="#">${i}</a>`
          ).join("")}
        </div>
      `).join("");

      dropdown.classList.add("show");
    });
  });

  dropdown.addEventListener("mouseleave", () => {
    dropdown.classList.remove("show");
  });
}

/* ================= SEARCH INIT (FIXED) ================= */
function initSearch() {
  const searchIcon = document.getElementById("searchIcon");
  const searchDropdown = document.getElementById("searchDropdown");
  const mainDropdown = document.getElementById("mainDropdown");

  if (!searchIcon || !searchDropdown) return;

  searchIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    mainDropdown?.classList.remove("show");
    searchDropdown.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!searchDropdown.contains(e.target) && e.target !== searchIcon) {
      searchDropdown.classList.remove("active");
    }
  });
}
