document.getElementById("visit-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("form-message");

  if (name && email && message) {
    feedback.textContent = `Thank you, ${name}! Your message has been sent.`;
    feedback.classList.remove("hidden");
    feedback.style.color = "green";

    // Store in localStorage
    localStorage.setItem("lastContactName", name);
    localStorage.setItem("lastContactEmail", email);
    localStorage.setItem("lastContactMessage", message);

    // Reset form
    this.reset();
  } else {
    feedback.textContent = "Please fill in all required fields.";
    feedback.classList.remove("hidden");
    feedback.style.color = "red";
  }
});
