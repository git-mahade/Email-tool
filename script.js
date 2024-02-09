const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(
  document.getElementById("app-bar")
);

// Initialize drawer
const drawer = mdc.drawer.MDCDrawer.attachTo(
  document.querySelector(".mdc-drawer")
);

// Toggle drawer on top app bar navigation icon click
topAppBar.listen("MDCTopAppBar:nav", () => {
  drawer.open = !drawer.open;
});
