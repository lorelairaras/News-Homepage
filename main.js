document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const primaryNavigation = document.getElementById("primary-navigation");
  const overlay = document.getElementById("overlay");

  mobileMenuToggle.addEventListener("click", function () {
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
    primaryNavigation.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = "hidden";
  });

  mobileMenuClose.addEventListener("click", function () {
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    primaryNavigation.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });
});
