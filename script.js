// creating nav style on scroll

console.log('js works');

const nav_bar = document.querySelector('.nav_bar');
const scroll_watcher = document.createElement('div');
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const menu_items = document.getElementById('menu_items');
const shop_menu = document.getElementById('shop');

let lastScrollY = window.scrollY;   
let itemsAdded = false;


scroll_watcher.setAttribute('data-scroll-watcher', '');
nav_bar.before(scroll_watcher);

menu.style.background = 'none';

const navObserver = new IntersectionObserver((entries) => {
    nav_bar.classList.toggle('sticking', !entries[0].isIntersecting);
}, {
    rootMargin: "300px 0px 0px 0px"
})

navObserver.observe(scroll_watcher);


window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY) {
        nav_bar.classList.add('hidden')
    } else {
        nav_bar.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
})

hamburger.addEventListener('click', () => {
    menu_items.classList.toggle('hidden');
    shop_menu.classList.toggle('hidden');
    menu.style.background = menu.style.background === 'none' ? 'black' : 'none';
})
