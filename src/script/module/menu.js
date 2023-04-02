
export default function menuButton(){
    const nav = document.querySelector('.header__nav');
    
    if(nav.classList.length == 1){
        nav.classList.add('header__nav--is-active');
    }
    else{
        nav.classList.remove('header__nav--is-active');
    }
}