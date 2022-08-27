import emailjs from "@emailjs/browser"
window.onload = function () {
  document
    .getElementById("subscribeForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous
      let serviceID = "service_3mah583",
        templateID = "template_l7n12vg",
        success = document.getElementById("sub-success"),
        error = document.getElementById("sub-Error");

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
    email = document.getElementById("email");
    (email.value = "");
}
