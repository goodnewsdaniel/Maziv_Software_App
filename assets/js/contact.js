//Import Email Library
import emailjs from "@emailjs/browser"
window.onload = function () {
  document
    .getElementById("ContactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous
      let serviceID = "service_3mah583",
        templateID = "template_l7n12vg",
        success = document.getElementById("email_success"),
        error = document.getElementById("email_error");

      emailjs.sendForm(serviceID, templateID, this).then(
        function () {
          success.classList.remove("d-none");
          success.style.color = "SeaGreen";
          setTimeout(() => {
            success.classList.add("d-none");
          }, 2500);
        },
        function () {
          error.classList.remove("d-none");
          error.style.color = "red";
          setTimeout(() => {
            error.classList.add("d-none");
          }, 2500);
        }
      );
      clearForm();
    });
};

function clearForm() {
  const name = document.getElementById("name"),
    email = document.getElementById("email"),
    subject = document.getElementById("subject"),
    message = document.getElementById("message");

  (name.value = ""),
    (email.value = ""),
    (subject.value = ""),
    (message.value = "");
}
