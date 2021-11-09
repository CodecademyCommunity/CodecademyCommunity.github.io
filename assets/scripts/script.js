const burger = document.querySelector('.burger');
const navElements = document.querySelector('#navbar-items');

burger.addEventListener('click', function(){
    burger.classList.toggle('is-active');
    navElements.classList.toggle('is-active');
})
