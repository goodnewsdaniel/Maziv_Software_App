// Mail Subscription
/**
     * Select elements/Variable Declarations
     */
 let full_name = document.getElementById("name"),
    email= document.getElementById("email"),
    subject = document.getElementById("subject"),
    message = document.getElementById("message"),
    submit =  document.getElementById("submit"),
    sent_message = document.querySelector("sent-message"),
    error_message = document.querySelector("error-message"),
    sucAlert = document.getElementById("sub-success"),
    inputErrorAlert = document.getElementById("sub-inputError"),
    errorAlert = document.getElementById("sub-Error");

const processForm = function () {
    
    /**
     * This function validates inputs
     */    
    function validate() {
      submit = addEventListener("click", (e) => {
        // e.preventDefault();
  
        if (full_name.value === "") {
          inputError();
        }
        else if(email.value == ""){
            inputError();
        }
        else if(subject.value == ""){
            inputError();
        }
        else if(message.value == ""){
            inputError();
        }
        else {
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
  