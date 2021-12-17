hljs.highlightAll();

const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('open')
    menu.classList.toggle('active')

    if(burger.classList.contains('open')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
})