let isBurgerResponsive = false;

function openResponsiveBurger() {
    const burger = document.getElementById('burger');
    
    if (!isBurgerResponsive) {
        burger.classList.remove('burger-wrapper');
        burger.classList.add('burger-wrapper-responsive');
        isBurgerResponsive = true;
    } else {
        burger.classList.remove('burger-wrapper-responsive');
        burger.classList.add('burger-wrapper');
        isBurgerResponsive = false;
    }
}
