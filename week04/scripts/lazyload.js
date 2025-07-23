const year = document.querySelector('#currentyear');
const lastModification = document.querySelector('#lastModification');

const today = new Date();

year.innerHTML = `&copy ${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("main img");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.1
  });

  images.forEach(img => {
    observer.observe(img);
  });

})
