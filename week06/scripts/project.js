// Dynamic year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// Seasonal Flavor - example with an array
const seasonalFlavors = [
  { name: "Strawberry Cheesecake", desc: "Creamy cheesecake gelato with fresh strawberries." },
  { name: "Pistachio", desc: "Rich pistachio flavor from Sicilian nuts." },
  { name: "Lemon Sorbet", desc: "Refreshing lemon sorbet made with fresh citrus." }
];

const randomFlavor = seasonalFlavors[Math.floor(Math.random() * seasonalFlavors.length)];
document.getElementById("seasonal-flavor").innerHTML = `
  <h3>${randomFlavor.name}</h3>
  <p>${randomFlavor.desc}</p>
`;


