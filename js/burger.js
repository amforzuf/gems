const burger = document.querySelector('.burger')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

burger.addEventListener('click', () => {
    nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})