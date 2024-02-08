// Vars
let form = document.getElementById("emailForm");
let validEmail = /^\w+([.\-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

// Event
form.addEventListener("submit", function (e) {
  let email = document.querySelector(".main__input");
  if (!validEmail.test(email.value)) {
    e.preventDefault();
    email.style.border = "1px solid hsl(354, 100%, 67%)";
    let formMessage = document.querySelector(".main__form-message");
    formMessage.innerHTML = "Please provide a valid email address";
    formMessage.style.color = "hsl(354, 100%, 67%)";
    formMessage.classList.add("active");
  }
});
