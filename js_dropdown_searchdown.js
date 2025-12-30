/* ============================= DROPDOWN & SEARCH JS ========================= */

/* Prevent double init */
if (!window.__dropdownSearchLoaded) {
  window.__dropdownSearchLoaded = true;

  /* ===== MENU DATA ===== */
  window.MENU_DATA = {
    Store: [
      {
        title: "Shop",
        big: true,
        items: [
          ["Shop the Latest", "inside_page_17air.html"],
          ["Mac", "inside_page_mac.html"],
          ["iPad", "inside_page_ipad.html"],
          ["iPhone", "inside_page_17pro.html"],
          ["Apple Watch", "inside_page_watch.html"],
          ["AirPods", "inside_page_pods.html"],
          ["Accessories", "#"]
        ]
      },
      {
        title: "Quick Links",
        items: ["Find a Store", "Order Status", "Apple Trade In", "Ways to Buy", "Personal Setup"]
      },
      {
        title: "Shop Special Stores",
        items: ["Education", "Business"]
      }
    ],

    Mac: [
      {
        title: "Explore All Mac",
        big: true,
        items: [
          { label: "MacBook Pro", link: "inside_page_mac.html" },
          { label: "MacBook Air", link: "inside_page_mac.html" },
          { label: "iMac"},
          { label: "Mac mini" },
          { label: "Mac Studio"},
          { label: "Displays" }
        ]
      },
      {
        title: "Shop Mac",
        items: [
          { label: "Find a Store"},
          { label: "Order Status" },
          { label: "Ways to Buy"}
        ]
      },
      {
        title: "More from Mac",
        items: [
          { label: "Mac Support"},
          { label: "AppleCare"},
          { label: "Mac Privacy"},
          { label: "Apps by Apple"},
          { label: "iCloud+"}
        ]
      }
    ],

        iPad: [
      {
        title: "Explore All iPads",
        big: true,
        items: [
          { label: "iPad Pro", link: "inside_page_ipad.html" },
          { label: "iPad Air", link: "inside_page_ipad.html" },
          { label: "iPad"},
          { label: "Mac mini" },
          { label: "iPad mini"},
          { label: "Apple Pencil" }
        ]
      },
      {
        title: "Shop iPad",
        items: [
          { label: "Find a Store"},
          { label: "Order Status" },
          { label: "Ways to Buy"}
        ]
      },
      {
        title: "More from iPad",
        items: [
          { label: "iSupport"},
          { label: "AppleCare"},
          { label: "Mac Privacy"},
          { label: "Apps by Apple"},
          { label: "iCloud+"}
        ]
      }
    ],

  iPhone: [
  {
    title: "Explore All iPhones",
    big: true,
    items: [
      { label: "iPhone 17 Pro", link: "inside_page_17pro.html" },
      { label: "iPhone 17 Pro Max", link: "inside_page_17pro.html" },
      { label: "iPhone 17 Air",link: "inside_page_17air.html" },
      { label: "iPhone 17" },
      { label: "iPhone 16"},
      { label: "iPhone 16e"}
    ]
  },
  {
    title: "Shop iPhone",
    items: [
          { label: "Find a Store"},
          { label: "Order Status" },
          { label: "Ways to Buy"}
    ]
  },
  {
    title: "More from iPhone",
    items: [
          { label: "iSupport"},
          { label: "AppleCare"},
          { label: "Mac Privacy"},
          { label: "Apps by Apple"},
          { label: "iCloud+"}
    ]
  }
],

Watch: [
  {
    title: "Explore All Apple Watch",
    big: true,
    items: [
      { label: "Series 11", link: "inside_page_watch.html" },
      { label: "SE 3", link: "inside_page_watch.html"},
      { label: "Ultra 3" },
      { label: "Ultra 4" },
      { label: "Nike"}
    ]
  },
  {
    title: "Shop Watch",
    items: [
          { label: "Find a Store"},
          { label: "Order Status" },
          { label: "Ways to Buy"}
    ]
  },
  {
    title: "Shop for Watches",
    items: [
          { label: "iSupport"},
          { label: "AppleCare"},
          { label: "Mac Privacy"},
          { label: "Apps by Apple"},
          { label: "iCloud+"}
    ]
  }
],
AirPods: [
  {
    title: "Explore All AirPods",
    big: true,
    items: [
      { label: "AirPods 4", link: "inside_page_pods.html" },
      { label: "AirPods Pro 3", link: "inside_page_pods.html" },
      { label: "AirPods Max" }
    ]
  },
  {
    title: "Shop AirPods",
    items: [
      { label: "AirPods Accessories" },
      { label: "Shop AirPods"},
      { label: "Ways to Buy" }
    ]
  },
  {
    title: "More from AirPods",
    items: [
      { label: "AirPods Support" },
      { label: "AppleCare" },
      { label: "AirPods Privacy" },
      { label: "Apps by Apple"}
    ]
  }
],

"Apple TV": [
  {
    title: "Explore Apple TV",
    big: true,
    items: [
      { label: "Apple TV 4K" },
      { label: "HomePod"},
      { label: "HomePod mini" }
    ]
  },
  {
    title: "Shop TV",
    items: [
      { label: "Shop Apple TV" },
      { label: "Shop HomePod"},
      { label: "Shop Siri Remote" }
    ]
  },
  {
    title: "More from Apple TV",
    items: [
      { label: "Apple TV Support"},
      { label: "AppleCare" }
    ]
  }
],

Accessories: [
  {
    title: "Shop All Accessories",
    big: true,
    items: [
      { label: "Mac", link: "inside_page_mac.html" },
      { label: "iPad", link: "inside_page_ipad.html" },
      { label: "iPhone", link: "inside_page_17air.html" },
      { label: "Apple TV+"},
      { label: "HomePod mini"},
      { label: "Apple Watch" }
    ]
  },
  {
    title: "Explore Accessories",
    items: [
      { label: "Made by Apple" },
      { label: "Beats" },
      { label: "AirTag" }
    ]
  }
],

Entertainment: [
  {
    title: "Explore Entertainment",
    big: true,
    items: [
      { label: "Apple One"},
      { label: "Apple TV+" },
      { label: "HomePod mini" }
    ]
  },
  {
    title: "Support",
    items: [
      { label: "Apple TV+ Support" },
      { label: "Apple Music Support"}
    ]
  }
],

Support: [
  {
    title: "Explore Support",
    big: true,
    items: [
      { label: "iPhone"},
      { label: "Mac"},
      { label: "iPad"},
      { label: "Apple TV+" },
      { label: "HomePod mini" }
    ]
  },
  {
    title: "Get Help",
    items: [
      { label: "Community" },
      { label: "Check Coverage" },
      { label: "Repair"}
    ]
  },
  {
    title: "Help Topics",
    items: [
      { label: "Billing & Subscription" },
      { label: "Accessibility" }
    ]
  }
],
  }
  
  /* ================= DESKTOP DROPDOWN ================= */
  function initDropdown() {
    const dropdown = document.getElementById("mainDropdown");
    const content = document.getElementById("dropdownContent");

    if (!dropdown || !content) return;

    let activeMenu = null;

    document.querySelectorAll(".nav-item").forEach(item => {
      item.addEventListener("mouseenter", () => {
        if (window.innerWidth <= 900) return;

        const key = item.textContent.trim();
        if (activeMenu === key || !MENU_DATA[key]) return;

        activeMenu = key;

        content.innerHTML = MENU_DATA[key].map(col => `
          <div class="${col.big ? "col-shop" : "col"}">
            <h4>${col.title}</h4>
            ${(col.items || []).map(i => {
              if (Array.isArray(i)) return `<a href="${i[1]}">${i[0]}</a>`;
              if (typeof i === "object") return `<a href="${i.link || '#'}">${i.label}</a>`;
              return `<a href="#">${i}</a>`;
            }).join("")}
          </div>
        `).join("");

        dropdown.classList.add("show");
      });
    });

    dropdown.addEventListener("mouseleave", () => {
      activeMenu = null;
      dropdown.classList.remove("show");
    });
  }

  /* ================= SEARCH ================= */
  function initSearch() {
    const searchIcon = document.getElementById("searchIcon");
    const searchDropdown = document.getElementById("searchDropdown");
    const mainDropdown = document.getElementById("mainDropdown");

    if (!searchIcon || !searchDropdown) return;

    searchIcon.addEventListener("click", e => {
      e.stopPropagation();
      mainDropdown?.classList.remove("show");
      searchDropdown.classList.toggle("active");
    });

    document.addEventListener("click", e => {
      if (!searchDropdown.contains(e.target) && e.target !== searchIcon) {
        searchDropdown.classList.remove("active");
      }
    });
  }

  /* ================= HAMBURGER  ================= */
  function initHamburger() {
    const menuBtn = document.querySelector(".menu-btn");
    const navList = document.querySelector(".nav-list");
    const dropdown = document.getElementById("mainDropdown");
    const searchDropdown = document.getElementById("searchDropdown");

    if (!menuBtn || !navList) {
      return;
    }

    /* Toggle menu */
    menuBtn.addEventListener("click", e => {
      e.stopPropagation();

      navList.classList.toggle("show");

      dropdown?.classList.remove("show");
      searchDropdown?.classList.remove("active");
    });

    /* Close on link click */
    navList.querySelectorAll("li").forEach(li => {
      li.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
          navList.classList.remove("show");
        }
      });
    });

    /* Click outside */
    document.addEventListener("click", e => {
      if (
        window.innerWidth <= 900 &&
        !navList.contains(e.target) &&
        !menuBtn.contains(e.target)
      ) {
        navList.classList.remove("show");
      }
    });
  }

  /* ================= INIT ================= */
  document.addEventListener("DOMContentLoaded", () => {
    initDropdown();
    initSearch();
    initHamburger();
  });
  
}
