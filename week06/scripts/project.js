document.addEventListener('DOMContentLoaded', () => {
  const heroImg = document.querySelector('.hero picture img');
  const seasonalAnchor = document.getElementById('seasonal-space');
  
  const originalSrc = heroImg.src;
  const seasonalSrc = 'images/gelato-hero.webp';
  
  function checkScroll() {
    const seasonalTop = seasonalAnchor.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (seasonalTop <= viewportHeight / 2) {
      
      if (heroImg.src !== seasonalSrc) {
        heroImg.src = seasonalSrc;
      }
    } else {
     
      if (heroImg.src !== originalSrc) {
        heroImg.src = originalSrc;
      }
    }
  }
  

  window.addEventListener('scroll', checkScroll);
  
 
  checkScroll();
});


const year = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified')

const today = new Date();

year.innerHTML = `&copy; ${today.getFullYear()}`;

lastModified.innerHTML = `Last Modification: ${document.lastModified}`;


// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// Seasonal Flavor
const seasonalFlavors = [
  { name: "Strawberry Cheesecake", desc: "Creamy cheesecake gelato with fresh strawberries." },
  { name: "Pistachio", desc: "Rich pistachio flavor from Sicilian nuts." },
  { name: "Chocolate Lemon Sorbet", desc: "Refreshing chocolate lemon sorbet made with fresh citrus." }
];

const randomFlavor = seasonalFlavors[Math.floor(Math.random() * seasonalFlavors.length)];
document.getElementById("seasonal-flavor").innerHTML = `
  <h3>${randomFlavor.name}</h3>
  <p>${randomFlavor.desc}</p>
`;


