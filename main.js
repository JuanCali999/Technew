document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
})
/* seleccionando el elemento o clase .nav menu y le agregaremos el show a su clase con el classList.toogle('show')
/* toggle() agrega o quita la clase show, en el caso de que no exista
*/
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.showcase', {delay: 500 });
ScrollReveal().reveal('.new-cards', {delay: 500 });
ScrollReveal().reveal('.cards-banner-one', {delay: 500 });
ScrollReveal().reveal('.cards-banner-two', {delay: 500 });
