// Initialize topbar
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(
  document.getElementById("app-bar")
);

// Initialize drawer
const drawer = mdc.drawer.MDCDrawer.attachTo(
  document.querySelector(".mdc-drawer")
);

// Open drawer by default
drawer.open = true;

// Toggle drawer on top app bar navigation icon click
topAppBar.listen("MDCTopAppBar:nav", () => {
  drawer.open = !drawer.open;
});

// JavaScript for button
const buttonRipple = mdc.ripple.MDCRipple.attachTo(
  document.querySelector(".mdc-button")
);

// Initialize menu
const menu = new mdc.menu.MDCMenu(document.querySelector(".mdc-menu"));
const adminButton = document.getElementById("adminButton");

// Add click event listener to the admin button
adminButton.addEventListener("click", function () {
  menu.open = !menu.open;
  if (menu.open) {
    menu.setAbsolutePosition(100, 100);
  }
});
