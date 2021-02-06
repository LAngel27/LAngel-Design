const $header = document.getElementById('init')
const $main = document.querySelector("#hero")
const $navbar = document.querySelector('.header-navbar')
const $header__btn = document.querySelector('.header-button')
const $title = document.querySelector("#services > h1")

addEventListener('load', ev => {
        $header.style.display = 'block'
        $main.style.display = 'block'
        $header.style.animation = 'reboot 2s forwards'
        $main.style.animation = 'left 2s forwards'
    

})

addEventListener('scroll', ev => {
    let index = ev.target.scrollingElement.scrollTop


    let div = index / 12
    let i = parseInt(div.toFixed(0))
        
        if(i >= 12){
            $title.style.animation = 'left 2s forwards'
            $title.style.display = 'block'
        }

    
});



$header__btn.addEventListener('click', () => {
    $header__btn.classList.toggle('header-button-active') 
    
});



function toggle($element = $navbar) {
    $element.classList.toggle('header-navbar-active')
};




const $ICON = document.getElementById('menu-hamburger').addEventListener('click', () => {
    toggle()
});







