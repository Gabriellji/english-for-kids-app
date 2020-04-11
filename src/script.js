
import View from './View';

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

// toggle button

const button = document.querySelector('input');

button.addEventListener('click', () => {

  button.classList.toggle('active');
  changeBackgroundColor();
});

 const changeBackgroundColor = () => {
  let imageColor = document.querySelectorAll(".image-link");
  if(button.classList.contains('active')) {
    menuNavigation.style.background = 'linear-gradient(to bottom left, #00cc00 0%, #ffcc00 100%)';
    imageColor.forEach(b => b.style.background = 'linear-gradient(to bottom left, #00cc00 0%, #ffcc00 100%)');
  } else {
    menuNavigation.style.background = 'linear-gradient(to top right, #ffcc00 0%, #ff00ff 100%)';
    imageColor.forEach(b => b.style.background = 'linear-gradient(to top right, #ffcc00 0%, #ff00ff 100%)');
  }
};

//clik card on main page 

const mainContainer = document.querySelector('.main-cards-images');

<<<<<<< HEAD
mainContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('image-link')) {
    console.log('fdgdzgfz');
    newFunction();
  }
});





function newFunction() {
  View.init();
  View.renderCard();
  View.drawCard();
}
// View.renderCard();

// View.drawCard();
=======
View.init();
View.drawCard("/english-for-kids/src/img/cat.jpg", 'hgjgcjgxjhgd');
>>>>>>> parent of e4a6296... feat: create view module
