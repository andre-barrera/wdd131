const year = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified')

const today = new Date();

year.innerHTML = `&copy; ${today.getFullYear()}`;

lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

