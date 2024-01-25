let isBurgerResponsive = false;

function openResponsiveBurger() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('navigation');

    if (!isBurgerResponsive) {
        burger.classList.remove('burger-wrapper');
        burger.classList.add('burger-wrapper-responsive');
        nav.classList.add('nav-responsive')
        isBurgerResponsive = true;
    } else {
        burger.classList.remove('burger-wrapper-responsive');
        burger.classList.add('burger-wrapper');
        nav.classList.remove('nav-responsive');
        isBurgerResponsive = false;
    }
}
