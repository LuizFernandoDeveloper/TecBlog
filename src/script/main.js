import menuButton from "./module/menu.js";

const buttonMenu = document.querySelector('.header__button-mobile');

buttonMenu.addEventListener('click',function(){
    menuButton();
});