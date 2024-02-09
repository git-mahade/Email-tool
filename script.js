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

// Initialize data table
const dataTable = mdc.dataTable.MDCDataTable.attachTo(
  document.querySelector(".mdc-data-table")
);
dataTable.listen("MDCDataTable:sorted", (event) => {
  const { columnId, sortValue } = event.detail;
  // Implement your sorting logic here
  // For instance, sort your data source based on `columnId` and `sortValue` (ascending or descending)
  console.log(`Column sorted: ${columnId}, Direction: ${sortValue}`);
});
