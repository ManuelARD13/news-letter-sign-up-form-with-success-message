const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const emailInput = document.getElementById("email-input");
const suscribe = document.getElementById("suscribe-button");
const errorMessage = document.getElementsByClassName("error-message hidden")[0];

suscribe.setAttribute("disabled", "");

emailInput.addEventListener("input", (event) => {
  const email = event.target.value;
  validateEmail(email);
});

suscribe.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "./success.html"
});



const toggleButton = () => {
  emailInput.classList.remove("error");
  errorMessage.classList.add("hidden");
};

const validateEmail = (email) => {
  if (String(email).match(re)) {
    toggleButton();
    suscribe.removeAttribute("disabled");
  } else if (email.length <= 0) {
    toggleButton();
  } else {
    emailInput.classList.add("error");
    errorMessage.classList.remove("hidden");
  }
};


