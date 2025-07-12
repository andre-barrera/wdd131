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
    hamButton.classList.toogle("open");
});


