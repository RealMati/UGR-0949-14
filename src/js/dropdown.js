const drop_img = document.getElementById("burger")

const links = document.querySelector(".navLinks--dropdown")

drop_img.addEventListener("click",()=>{
    
    // links.classList.toggle("active-burger")
    if (links.style.display=="none"){
        links.style.display='block'
        drop_img.src="images/active-menu.svg"
    }else{
        links.style.display='none'
        drop_img.src="images/menu.svg"
    }
});