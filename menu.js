const menu = document.querySelector(".menu");
const menuOpenBtn = document.querySelector(".open-menu");
const menuCloseBtn = document.querySelector(".close-menu");

function toggleMenu(){
    menu.classList.toggle("menu_opened");
}

menuOpenBtn.addEventListener("click", toggleMenu);
menuCloseBtn.addEventListener("click", toggleMenu);