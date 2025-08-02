const year = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified')

const today = new Date();

year.innerHTML = `&copy; ${today.getFullYear()}`;

lastModified.innerHTML = `Last Modification: ${document.lastModified}`;


// form 

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Options
const productSelect = document.getElementById("productName");

if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// Review Page

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    productName: params.get("productName") || "N/A",
    rating: params.get("rating") || "N/A",
    installDate: params.get("installDate") || "N/A",
    features: params.getAll("features"), 
    reviewText: params.get("reviewText") || "(No review written)",
    username: params.get("username") || "(Anonymous)"
  };
}

function renderReviewConfirmation() {
  const confirmationSection = document.getElementById("confirmation");
  if (!confirmationSection) return; 

  const data = getQueryParams();

  const featuresText = data.features.length > 0 ? data.features.join(", ") : "None selected";


  const ratingStars = "★".repeat(Number(data.rating)) + "☆".repeat(5 - Number(data.rating));


  const reviewSummary = document.getElementById("reviewSummary");
  reviewSummary.innerHTML = `
    <p><strong>Product Name:</strong> ${data.productName}</p>
    <p><strong>Overall Rating:</strong> ${ratingStars}</p>
    <p><strong>Date of Installation:</strong> ${data.installDate}</p>
    <p><strong>Useful Features:</strong> ${featuresText}</p>
    <p><strong>Written Review:</strong> ${data.reviewText}</p>
    <p><strong>User Name:</strong> ${data.username}</p>
  `;

  //localStorage
  const REVIEW_COUNT_KEY = "reviewCount";
  let count = Number(localStorage.getItem(REVIEW_COUNT_KEY)) || 0;
  count += 1;
  localStorage.setItem(REVIEW_COUNT_KEY, count);

  const reviewCountElem = document.getElementById("reviewCount");
  reviewCountElem.textContent = `You have submitted ${count} review${count === 1 ? "" : "s"}.`;
}


document.addEventListener("DOMContentLoaded", renderReviewConfirmation);
