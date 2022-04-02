const burger = document.querySelector('.burger-menu');
const list = document.querySelector('.header__nav-list');


burger.addEventListener(`click`, () => {
    burger.classList.toggle('active')
    list.classList.toggle('list-active');
})
