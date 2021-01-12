
const $header = document.getElementById('init')
const $navbar = document.querySelector('.header-navbar')
const $header__btn = document.querySelector('.header-button')
const $title = document.querySelector("#services > h1")



addEventListener('scroll', (ev) => {
    let index = ev.target.scrollingElement.scrollTop

    let div = index / 12
    let result = parseInt(div.toFixed(0))
    console.log(result)

    for (let i = result; i < 10000; i++) {
        if( i > 1){
            $header__btn.style.display = 'none'
            $title.style.display = 'none'
        } else {
        }
    }
})


$header__btn.addEventListener('click', () =>{
    $header__btn.classList.toggle('header-button-active') 
    
});



function toggle($element = $navbar) {
    $element.classList.toggle('header-navbar-active')
};




const $ICON = document.getElementById('menu-hamburger').addEventListener('click', () => {
    toggle()
});







