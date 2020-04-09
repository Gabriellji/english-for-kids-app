const menuHamburgerButton = document.querySelector('.hamburger');
const menuNavigation = document.querySelector('.header__navigation');
const menuHiddenOverlay = document.querySelector('.overlay');

const openMobileMenu = () => {
    menuHiddenOverlay.classList.add('hidden-overlay');
    menuHamburgerButton.classList.add('clicked__hamburger');
    menuNavigation.style.left = "0%";
}

const closeMobileMenu = () => {
    menuHamburgerButton.classList.remove('clicked__hamburger');
    menuNavigation.style.left = "-100%";
}

const clickHamburgerHandler = () => {
    if (menuNavigation.style.left === "-100%" || menuNavigation.style.left === "") {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
}

const clickLinksHandler = (e) => {
    if (e.target.tagName === 'A') {
        closeMobileMenu();
    }
}

menuHamburgerButton.addEventListener('click', clickHamburgerHandler);
menuNavigation.addEventListener('click', clickLinksHandler);