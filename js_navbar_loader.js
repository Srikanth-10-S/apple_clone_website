fetch("Navbar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("navbar").innerHTML = html;

    // 🔥 INIT AFTER HTML EXISTS
    initDropdown();   // mega menu
    initSearch();     // search dropdown
    initBag();        // bag dropdown
  });
