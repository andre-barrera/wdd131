// ----- Common Footer Info -----
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ----- Mobile Menu -----
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// ----- Gelato Flavors Array -----
const gelatoMenu = [
  { name: "Pistachio", desc: "Rich Sicilian pistachios in a creamy base.", price: 3.50, img: "images/pistachio.jpg" },
  { name: "Stracciatella", desc: "Classic milk gelato with chocolate shavings.", price: 3.50, img: "images/stracciatella.jpg" },
  { name: "Mango Sorbet", desc: "Refreshing tropical mango sorbet.", price: 3.00, img: "images/mango.jpg" },
  { name: "Hazelnut", desc: "Nutty hazelnut perfection.", price: 3.50, img: "images/hazelnut.jpg" },
  { name: "Lemon Sorbet", desc: "Zesty and refreshing lemon sorbet.", price: 3.00, img: "images/lemon.jpg" },
  { name: "Tiramisu", desc: "Coffee, cocoa, and mascarpone gelato.", price: 4.00, img: "images/tiramisu.jpg" }
];

// ----- Display Menu Items -----
const menuContainer = document.getElementById("menu-container");

function displayMenu() {
  menuContainer.innerHTML = gelatoMenu.map(flavor => `
    <div class="menu-item">
      <img src="${flavor.img}" alt="${flavor.name}" loading="lazy">
      <h3>${flavor.name}</h3>
      <p>${flavor.desc}</p>
      <p><strong>$${flavor.price.toFixed(2)}</strong></p>
      <button class="favorite-btn" data-name="${flavor.name}">❤️ Add to Favorites</button>
    </div>
  `).join("");
}
displayMenu();

// ----- Favorites with localStorage -----
const favoritesList = document.getElementById("favorites-list");

// Load saved favorites
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Save favorites to localStorage
function saveFavorites() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
  displayFavorites();
}

// Display favorites
function displayFavorites() {
  favoritesList.innerHTML = favorites.length
    ? favorites.map(fav => `<li>${fav}</li>`).join("")
    : "<li>No favorites yet. ❤️</li>";
}
displayFavorites();

// Add favorite event
menuContainer.addEventListener("click", e => {
  if (e.target.classList.contains("favorite-btn")) {
    const flavorName = e.target.getAttribute("data-name");
    if (!favorites.includes(flavorName)) {
      favorites.push(flavorName);
      saveFavorites();
    }
  }
});
