export default function menuButton(){
    const nav = document.querySelector('.header__nav');
    let parameter = false;

    if(parameter == false){
        nav.classList.add('header__nav--is-active');
        parameter = true;
    }
    else{
        nav.classList.remove('header__nav--is-active');
        parameter = false;
    }
}