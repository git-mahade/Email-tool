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

// // Initialize data table
// const dataTable = mdc.dataTable.MDCDataTable.attachTo(
//   document.querySelector(".mdc-data-table")
// );
// dataTable.listen("MDCDataTable:sorted", (event) => {
//   const { columnId, sortValue } = event.detail;
//   // Implement your sorting logic here
//   // For instance, sort your data source based on `columnId` and `sortValue` (ascending or descending)
//   console.log(`Column sorted: ${columnId}, Direction: ${sortValue}`);
// });

// //initialze modal
// const dialog = mdc.dialog.MDCDialog.attachTo(
//   document.querySelector(".mdc-dialog")
// );

// // Initialize the list inside the dialog
// const list = mdc.list.MDCList.attachTo(
//   document.querySelector(".mdc-dialog .mdc-list")
// );

// // Listen for the dialog to be opened and lay out the list
// dialog.listen("MDCDialog:opened", () => {
//   list.layout();
// });

// // Find the button and attach a click event listener to open the dialog
// document
//   .querySelector(".open-dialog-button")
//   .addEventListener("click", function () {
//     dialog.open();
//   });


// Initialize menu
const menu = new mdc.menu.MDCMenu(document.querySelector(".mdc-menu"));
const adminButton = document.getElementById("adminButton");

// Add click event listener to the admin button
adminButton.addEventListener("click", function (event) {
  menu.open = !menu.open;
  if (menu.open) {
    menu.setAbsolutePosition(100, 100);
  }
});

// Get the button to open the dialog
  const openDialogButton1 = document.getElementById('openDialogButton1');
  const openDialogButton2 = document.getElementById('openDialogButton2');

  // Get the dialog element
  const dropdownMenu = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'));

  // Add click event listener to the button to open the dialog
  openDialogButton1.addEventListener('click', function() {
    dropdownMenu.open();
  });
  openDialogButton2.addEventListener('click', function() {
    dropdownMenu.open();
  });
