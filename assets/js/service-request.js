// Mail Subscription
/**
     * Select elements/Variable Declarations
     */
 let subEmail = document.querySelector(".subEmail"),
 subSubmit = document.querySelector(".subSubmit"),
 sucAlert = document.getElementById("sub-success"),
 inputErrorAlert = document.getElementById("sub-inputError"),
 errorAlert = document.getElementById("sub-Error");

const subscribe = function () {
    
    /**
     * This function validates inputs
     */    
    function validate() {
      subSubmit = addEventListener("click", (e) => {
        // e.preventDefault();
  
        if (subEmail.value === "") {
          inputError();
        } else {
          sendMail();
          success();
          
        }
      });
    }

    /**Call function Validate */
    validate();


    /** 
     * This Function displays error 
     * for unsuccessful subscription, and
     * closes automatically
     **/
    function error(){
      errorAlert.classList.remove('d-none');
      errorAlert.style.color = "red";

      setTimeout(() => {
        errorAlert.classList.add('d-none');
      }, 2500)
      // subEmail.focus();
    }

    /** 
     * This Function receives focus 
     * for invalid or empty inputs, and
     * closes automatically
     **/
    function inputError(){
      // subEmail.focus();
    }

    /** 
     * This Function displays a success  message 
     * for successful subscription, and
     * closes automatically
     **/
    function success(){
      sucAlert.classList.remove('d-none');
  
      setTimeout(() => {
        sucAlert.classList.add('d-none');
      }, 2500)
      if(subEmail.value != ""){
        subEmail.value = "";
        return;

      }
    }

    /** 
     * This Function sends an email
     * using the emailjs send() method
     **/
    function sendMail() {
      emailjs.send("service_3mah583", "template_l7n12vg", {
        from_email: subEmail.value,
      });
    }

  }()
  