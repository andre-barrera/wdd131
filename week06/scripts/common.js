
const year = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified')

const today = new Date();

year.innerHTML = `&copy; ${today.getFullYear()}`;

lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});
