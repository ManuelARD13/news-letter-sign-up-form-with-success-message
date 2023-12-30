const emailSyntax =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const emailInput = document.getElementById("email-input");
const suscribe = document.getElementById("suscribe-button");
const errorMessage = document.getElementById("error-message");

suscribe.setAttribute("disabled", "");

emailInput.addEventListener("input", (event) => {
  const email = event.target.value;
  validateEmail(email);
});

suscribe.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "./success.html"
});

const enableSubmit = () => {
  emailInput.classList.remove("error");
  errorMessage.classList.add("hidden");
};

const validateEmail = (email) => {
  if (String(email).match(emailSyntax)) {
    enableSubmit();
    suscribe.removeAttribute("disabled");
  } else if (email.length <= 0) {
    enableSubmit();
  } else {
    /*Email Validation Failed*/
    emailInput.classList.add("error");
    errorMessage.classList.remove("hidden");
  }
};


