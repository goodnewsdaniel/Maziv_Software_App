
const processForm = function () {
    /**
    * Select elements/Variable Declarations
  */
  
    let contact_form = document.getElementById("ContactForm"),
    full_name = document.getElementById("name"),
      email= document.getElementById("email"),
      subject = document.getElementById("subject"),
      message = document.getElementById("message"),
      submit =  document.getElementById("submit"),
      sent_message = document.querySelector("sent-message"),
      error_message = document.querySelector("error-message");
  
      /**
       * This function validates inputs
       */    
      function validate() {
        submit = addEventListener("click", (e) => {
          e.preventDefault();
    
          if (full_name.value == "") {
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
        error_message.classList.remove('d-none');
        error_message.style.color = "red";
        setTimeout(() => {
          error_message.classList.add('d-none');
        }, 2500)
      }
  
      function inputError(){
        // subEmail.focus();
        
      }
  
      function success(){
        sent_message.classList.remove('d-none');
    
        setTimeout(() => {
          sent_message.classList.add('d-none');
        }, 2500)
        }
      
      //SendMail Function()
      function sendMail() {
        let serviceID = "service_3mah583",
            templateID = "template_l7n12vg",
            maziv ="Maziv Software Limited";

        emailjs.send(serviceID,templateID,contact_form,{
          to_name: maziv,
          from_email: email.value,
          message: message.value,
          name: full_name.value,
          email: email.value,
          reply_to: email.value,
          subject: subject.value,
          }); 
      }
    }()
    