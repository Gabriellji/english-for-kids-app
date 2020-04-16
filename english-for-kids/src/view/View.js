import eventMixin from "../mixins/eventMixin";

class View {
  constructor() {
    this.body = document.querySelector('body');
    this.menu = document.querySelector('#menu');
    this.navigation = document.querySelector('.header__navigation');
    this.hamburger = document.querySelector('.hamburger');
    this.cardsContainer = document.querySelector('.main-cards-images');
    this.switcher = document.querySelector('input');
    this.overlay =  document.querySelector('.overlay');

    this.hamburger.addEventListener('click', this.clickHamburgerHandler.bind(this));
    this.navigation.addEventListener('click', this.clickLinksHandler.bind(this));
    this.switcher.addEventListener('click', this.clickSwitcherHandler.bind(this));
  }

  clickHamburgerHandler()  {
    if (this.navigation.style.left === "-100%" || this.navigation.style.left === "") {
        this.openMobileMenu();
    } else {
        this.closeMobileMenu();
    }
  }

  clickLinksHandler (e) {
    if (e.target.tagName === 'LI') {
        this.closeMobileMenu();
        if(e.target.id === 'maine-page__link') {
          this.emit('main_page_requested');
        } else {
          this.emit('category_requested', e.target.getAttribute('data-id'));
        }
    }
  }

  clickSwitcherHandler() {
    this.emit('toggle_switched');
  }

  openMobileMenu() {
    this.overlay.classList.add('hidden-overlay');
    this.hamburger.classList.add('clicked__hamburger');
    this.navigation.style.left = "0%";
  }

  closeMobileMenu() {
    this.hamburger.classList.remove('clicked__hamburger');
    this.navigation.style.left = "-100%";
  }

  flipCard(id) {
    const card = this.cardsContainer.querySelector(`[data_id="${id}"]`);
    card.classList.toggle('is-flipped');
  }

  cleanPage() {
    this.cardsContainer.innerHTML = '';
  }

  drawCard (id, word, img, translate='null') {
    const container = document.createElement('div');
    container.classList.add('scene');

    const innerContainer = document.createElement('div');
    innerContainer.classList.add('card');
    innerContainer.setAttribute('data_id', id);

    container.appendChild(innerContainer);

    const card = document.createElement('div');
    card.classList.add('card__face', 'card__face--front', 'image-link');

    const cardFacaBack = document.createElement('div');
    cardFacaBack.classList.add('card__face', 'card__face--back', 'image-link');

    const image = document.createElement('img');
    image.setAttribute('src', img);
    image.setAttribute('alt', word);

    const imageBack = document.createElement('img');
    imageBack.setAttribute('src', img);
    imageBack.setAttribute('alt', word);

    const title = document.createElement('span');
    title.textContent = word;

    const titleBack = document.createElement('span');
    titleBack.textContent = translate;

    card.appendChild(image);
    card.appendChild(title);

    cardFacaBack.appendChild(imageBack);
    cardFacaBack.appendChild(titleBack);

    innerContainer.appendChild(card);
    innerContainer.appendChild(cardFacaBack);

    this.cardsContainer.appendChild(container);
  }

  drawCards(arrayCards) {
    arrayCards.forEach(({id, word, translate, img}) => {
      this.drawCard(id, word, img, translate);
    });
  }

  drowMenuItem(text, id) {
    const listLink = document.createElement('li');
    listLink.setAttribute('data-id', id);
    listLink.textContent = text;

    this.link_container.appendChild(listLink);
  }

  drowMenu(arrayMenu) {
    arrayMenu.forEach((link) => {
      this.drowMenuItem(link.category, link.id);
    });
  }

  drowButton() {
    const button = document.createElement('button');
    button.classList.add('button-start');
    this.cardsContainer.appendChild(button);
  }

  changeBackgroundColor(mode) {
    let imageColor = document.querySelectorAll(".image-link");
    if(mode === 'play') {
      this.navigation.style.background = 'linear-gradient(to bottom left, #00cc00 0%, #ffcc00 100%)';
      imageColor.forEach(b => b.style.background = 'linear-gradient(to bottom left, #00cc00 0%, #ffcc00 100%)');
    } else if (mode === 'train'){
      this.navigation.style.background = 'linear-gradient(to top right, #ffcc00 0%, #ff00ff 100%)';
      imageColor.forEach(b => b.style.background = 'linear-gradient(to top right, #ffcc00 0%, #ff00ff 100%)');
    }
  }
}

Object.assign(View.prototype, eventMixin);

export default View;