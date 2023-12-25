const forms = document.querySelector("#form")
const fnameForm=document.querySelector("#fname")
const fnameErr=document.querySelector("#fname-Err")
const lnameForm=document.querySelector("#lname")
const lnameErr=document.querySelector("#lname-Err")
const emailForm=document.querySelector('#email')
const emailErr=document.querySelector("#email-Err")
const messageForm=document.querySelector("#message")
const messageErr=document.querySelector("#message-Err")
const emailRegex = /\S+@\S+\.\S+/
let modal = document.querySelector("#modal")

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
forms.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log("asddas")
    if (fnameForm.value==""){
        fnameErr.classList.remove("invisible")
    }else{
        fnameErr.classList.add("invisible")
    }

    if (lnameForm.value==""){
        lnameErr.classList.remove("invisible")
    } else{
        lnameErr.classList.add("invisible")
    }

    if (!emailRegex.test(emailForm.value)){
        emailErr.classList.remove("invisible")
    }else{
        emailErr.classList.add("invisible")
    }
    
    if (messageForm.value==""){
        messageErr.classList.remove("invisible")
    }else{
        messageErr.classList.add("invisible")
        
    }
    if ((fnameForm.value!="")&&(lnameForm.value!="")&&(emailRegex.test(emailForm.value))&&(messageForm.value!="")){
        const computedStyle = getComputedStyle(modal);
        if (computedStyle.display === "none") {
            modal.style.display="block"
        }
        setTimeout(() => {
            modal.style.display="none"
          }, 3000);

        // alert("submimtted")
    }

})









