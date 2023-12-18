const forms = document.querySelector(".form")
const fnameForm=document.querySelector("#fname")
const fnameErr=document.querySelector("#fname-Err")
const lnameForm=document.querySelector("#lname")
const lnameErr=document.querySelector("#lname-Err")
const emailForm=document.querySelector('#email')
const emailErr=document.querySelector("#email-Err")
const messageForm=document.querySelector("#message")
const messageErr=document.querySelector("#message-Err")
const emailRegex = /\S+@\S+\.\S+/
let modal = document.querySelector(".modal")

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
forms.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log("asddas")
    if (fnameForm.value==""){
        fnameErr.style.display="block"
    }else{
        fnameErr.style.display="none"
    }

    if (lnameForm.value==""){
        lnameErr.style.display="block"
    } else{
        lnameErr.style.display="none"
    }

    if (!emailRegex.test(emailForm.value)){
        emailErr.style.display="block"
    }else{
        emailErr.style.display="none"
    }
    
    if (messageForm.value==""){
        messageErr.style.display="block"

    }else{
        messageErr.style.display="none"
        
    }
    if ((fnameForm.value!="")&&(lnameForm.value!="")&&(emailRegex.test(emailForm.value))&&(messageForm.value!="")){
        const computedStyle = getComputedStyle(modal);
        if (computedStyle.display === "none") {
            modal.style.display = "block";        
        }
        setTimeout(() => {
            modal.style.display = 'none';
          }, 3000);

        // alert("submimtted")
    }

})









