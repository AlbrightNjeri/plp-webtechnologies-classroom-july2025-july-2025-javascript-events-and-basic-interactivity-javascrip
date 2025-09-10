// -----------------------------
// PART 1: Event Handling Basics
// -----------------------------

// Theme Toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});

// Counter
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increment").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// -----------------------------
// PART 3: Form Validation
// -----------------------------
const form = document.getElementById("signupForm");

// Validation function
function validateForm(event) {
  event.preventDefault(); // stop default form submission
  let isValid = true;

  // Clear old errors
  form.querySelectorAll(".error").forEach((e) => (e.textContent = ""));

  // Name validation: required + letters only
  const nameInput = document.getElementById("name");
  if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
    nameInput.nextElementSibling.textContent = "Please enter a valid name.";
    isValid = false;
  }

  // Email validation: regex
  const emailInput = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailInput.nextElementSibling.textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Password validation: min 6 chars + number
  const passwordInput = document.getElementById("password");
  if (!/^(?=.*\d).{6,}$/.test(passwordInput.value)) {
    passwordInput.nextElementSibling.textContent =
      "Password must be at least 6 chars and include a number.";
    isValid = false;
  }

  // Success message
  if (isValid) {
    alert("✅ Form submitted successfully!");
    form.reset();
  }
}

// Attach validation to form submit
form.addEventListener("submit", validateForm);
