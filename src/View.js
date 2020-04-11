 
 

 const View = {
 menu: null,
 navigation: null,
 hamburger: null,
 cards: null
};

View.prototype.init = function () {
    this.menu = document.querySelector('#menu');
    this.navigation = document.querySelector('.header__navigation');
    this.hamburger = document.querySelector('.header__hamburger');
    this.cards = document.querySelectorAll('.image-link');
};

View.prototype.drawCard = function (img, text) {
    const card = document.createElement('div');
    card.classList.add('image-link');
    const image = document.createElement('img');
    image.setAttribute('src', img);
    image.setAttribute('alt', text);
    const title = document.createElement('span');
    title.innerText(text);
    card.appendChild(image);
    card.appendChild(title);

    this.cards.appendChild(card);

};



export default View;

