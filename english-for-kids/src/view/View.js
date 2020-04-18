import eventMixin from "../mixins/eventMixin";

class View {
  constructor() {

    this.body = document.querySelector('body');
    this.menu = document.querySelector('#menu');
    this.navigation = document.querySelector('.header__navigation');
    this.hamburger = document.querySelector('.hamburger');
    this.cardsContainer = document.querySelector('.main-cards-images');
    this.scoreContainer = document.querySelector('.score');
    this.card = document.querySelector('.image-link');
    
  
    this.switcher = document.querySelector('input');
    this.overlay =  document.querySelector('.overlay');

    this.hamburger.addEventListener('click', this.clickHamburgerHandler.bind(this));
    this.navigation.addEventListener('click', this.clickLinksHandler.bind(this));
    this.switcher.addEventListener('click', this.clickSwitcherHandler.bind(this));
    this.cardsContainer.addEventListener('click', this.clickCardsHandler.bind(this));
  }

  clickCardsHandler(e) {
   const card = e.target.closest('.card');
    const card_id = card.getAttribute('data-id');
    this.emit('card_clicked', card_id);
   
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
          this.cleanScoreContainer();
        } else {
          this.emit('category_requested', e.target.getAttribute('data-id'));
        }
    }
  }

  leaveCardHandler(e) {
    e.target.classList.remove('is-flipped');
  }

  clickSwitcherHandler() {
    this.emit('toggle_switched');
  }

  clickPlayButtonHandler(){
    this.emit('play_button_pushed');
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
    // const rotateTarget = this.cardsContainer.querySelector(`img[data-id="${id}"]`);
    // rotateTarget.onclick = function(){
    //   const card = document.querySelector(`div[data-id="${id}"]`);
    //   card.classList.add('is-flipped');
    // }

    const card = this.cardsContainer.querySelector(`[data-id="${id}"]`);
    card.classList.toggle('is-flipped');
  }

  playModeView() {
    const card = document.querySelectorAll('.image-link');
    card.forEach(el => {
      el.classList.add('play');
    })
  }

  clickedCard(id){
    
    const card = this.cardsContainer.querySelector(`[data-id="${id}"]`);
    card.classList.add('clicked-card');
  }

  cleanPage() {
    this.cardsContainer.innerHTML = '';
  }

  cleanScoreContainer() {
    this.scoreContainer.innerHTML = '';
  }

  drawScore(roundArray){
    this.scoreContainer.innerHTML = '';
    roundArray.forEach(round => {
      const star = document.createElement('img');
      if(round) {
        star.setAttribute('src','/assets/img/star-win.svg');
      } else {
        star.setAttribute('src','/assets/img/star.svg')
      }
      this.scoreContainer.appendChild(star);
    });
  }

  drawCard (id, word, img, translation) {
    const container = document.createElement('div');
    container.classList.add('scene');

    const innerContainer = document.createElement('div');
    innerContainer.classList.add('card');
    innerContainer.setAttribute('data-id', id);

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

    // const arr = document.createElement('img');
    // arr.classList.add('arrow');
    // arr.setAttribute('src', '/assets/img/rotate.jpg');

    const titleBack = document.createElement('span');
    titleBack.textContent = translation;

    card.appendChild(image);
    card.appendChild(title);
    // card.appendChild(arr);

    cardFacaBack.appendChild(imageBack);
    cardFacaBack.appendChild(titleBack);

    innerContainer.appendChild(card);
    innerContainer.appendChild(cardFacaBack);

    this.cardsContainer.appendChild(container);

    innerContainer.addEventListener('mouseleave', this.leaveCardHandler.bind(this));
  }

  drawCards(arrayCards) {
    arrayCards.forEach(({id, word, translation, img}) => {
      this.drawCard(id, word, img, translation);
    });
  }

  drowMenuItem(text, id) {
    const listLink = document.createElement('li');
    listLink.setAttribute('data-id', id);
    listLink.textContent = text;

    this.menu.appendChild(listLink);
  }

  drowMenu(arrayMenu) {
    arrayMenu.items.forEach((link) => {
      this.drowMenuItem(link.word, link.id);
    });
  }

  drawButton() {
    const button = document.createElement('button');
    button.classList.add('button-start');
    button.innerText = 'Start Game';
    this.cardsContainer.appendChild(button);
    button.addEventListener('click', this.clickPlayButtonHandler.bind(this));
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

  showWinResult(){
    const image = document.querySelector('.finish-round-succes');
    image.style.visibility = 'unset';
  }

  showFailResult(){
    const image = document.querySelector('.finish-round-failure');
    image.style.visibility = 'unset';
  }

  hideResult(){
    const image = document.querySelectorAll('.image');
    image.forEach(img => img.style.visibility = 'hidden');
    
  }

}

Object.assign(View.prototype, eventMixin);

export default View;