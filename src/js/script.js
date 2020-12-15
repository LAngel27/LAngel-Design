
const $NAVBAR = document.querySelector('.header-navbar')

function toggle($element = $NAVBAR) {
    $element.classList.toggle('header-navbar-active')
}


// function replace() {
//     return(
//         '<i class="fas fa-times header-container__hamburger"></i>'
//     )
// }

// function html(fn) {
//     let $document = document.implementation.createHTMLDocument()
//     debugger
//     $document.body.innerHTML = fn
//     return $document.body.children[0]
// }

// html(replace)

const $ICON = document.getElementById('menu-hamburger').addEventListener('click', () => {
    toggle()
})







