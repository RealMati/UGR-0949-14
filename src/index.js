const menu=document.getElementsByClassName("navbar-burger")[0]

const lists=document.getElementsByClassName("navbar-menu")[0]

menu.addEventListener('click',() =>{
    lists.classList.toggle('is-active')
})