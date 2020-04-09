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

const button = document.querySelector('input');


button.addEventListener('click', () => {

  button.classList.toggle('active');
  changeBackgroundColor();
 
  // if(button.classList.contains('active')) {
  //   let imageColor = document.querySelectorAll('.link-image');
  //   imageColor.style.background = '#4CD964';
  // } else {
  //   imageColor.style.background = '#f06c64';
  // }
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
}

