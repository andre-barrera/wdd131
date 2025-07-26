const year = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');

// Menu Variables //

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// Span //

const today = new Date();

year.innerHTML = `&copy; ${today.getFullYear()}`
lastModified.innerHTML = `Last Modification: ${document.lastModified}`

// Menu Actions //

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// Temple Info / Photos Array

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Quetzaltenango Guatemala",
    location: "Quetzaltenango, Guetemala",
    dedicated: "2009, March, 14",
    area: 21085,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quetzaltenango-guatemala/400x250/quetzaltenango-guatemala-temple-lds-893068-wallpaper.jpg"
  },
  {
    templeName: "Campinas Brazil",
    location: "Campinas, São Paulo, Brazil",
    dedicated: "1998, May, 1",
    area: 48100,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-1030031-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2010, October, 23",
    area: 41010,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/6-Rome-Temple-2160338.jpg"
  }
];

// Main Array

const container = document.querySelector('.container');

cardCreation(temples);

// menu

// Home
const homeFilt = document.querySelector('#homeFilt');

homeFilt.addEventListener("click", () => {
  cardCreation(temples);
})

// Old

const oldFilter = document.querySelector('#oldFilt');

oldFilter.addEventListener("click", () => {
  cardCreation(temples.filter(temple => parseInt(temple.dedicated.slice(0,4)) < 1900))
});

// New

const newFilter = document.querySelector('#newFilt');

newFilter.addEventListener("click", () => {
  cardCreation(temples.filter(temple => parseInt(temple.dedicated.slice(0,4)) > 1900));
});

// Large

const largeFilter = document.querySelector('#largeFilt');

largeFilter.addEventListener("click", () => {
  cardCreation(temples.filter(temple => temple.area > 90000))
});

// Small

const smallFilter = document.querySelector('#smallFilt');

smallFilter.addEventListener("click", () => {
  cardCreation(temples.filter(temple => temple.area < 90000))
});

// Card Creation
function cardCreation(templesFilter) {

container.innerHTML = "";

templesFilter.forEach(element => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `<h2>${element.templeName}</h2>
    
    <p><strong>Location: </strong>${element.location}</p>
    <p><strong>Dedicated: </strong>${element.dedicated}</p>
    <p><strong>Size: </strong>${element.area} sq ft</p>

    <img src="${element.imageUrl}" alt="${element.templeName}" loading="lazy">`;
    
    container.appendChild(card);    
});

}

