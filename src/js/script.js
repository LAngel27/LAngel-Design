
const $navbar = document.querySelector('.header-navbar')
const $header__btn = document.querySelector('.header-button')
const $image__design = document.querySelector('.design-image__img')
const $icon__left = document.getElementById('icon-left')
const $icon__right = document.getElementById('icon-right')










$header__btn.addEventListener('click', () =>{
    $header__btn.classList.toggle('header-button-active') 
    
});



function toggle($element = $navbar) {
    $element.classList.toggle('header-navbar-active')
};




const $ICON = document.getElementById('menu-hamburger').addEventListener('click', () => {
    toggle()
});







