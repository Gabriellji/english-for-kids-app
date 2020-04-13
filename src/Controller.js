import View from './View';
import Card from './model/Card';
import Menu from './model/Menu';
import Mode from './model/Mode';


const Controller = {
 init(){
    // this.dataCards = new Card(0);
    this.dataMenu = new Menu();

    this.view = View;

    this.view.init();
    // this.view.drawCards(this.dataCards.data);
    this.setCategory(0);
    this.view.drowMenuPanel(this.dataMenu.data);
//flip card
    this.view.cards.addEventListener('click', this.cardHandler.bind(this));

    this.view.switcher.addEventListener('click', this.switcherHandler.bind(this));

    this.view.link_container.addEventListener('click', this.menuHandler.bind(this));
},


 cardHandler(e){
   const card = e.target.closest('.card');
   if(Mode.isTrain){
      if (card) {
         this.view.flipCard(card);
         card.querySelector('audio').play();
       }
   } else {
      const currentCard = Mode.activeCards[Mode.round - 1];
      // win
      if(card.getAttribute('data-id') == currentCard.id){
         currentCard.point = currentCard.point === false ? false : true;
         if(Mode.round < 8) {
            this.startRound();
         } else {
            this.endGame();
         }
         
      } else {
         this.playWord(currentCard.audioSrc);
         currentCard.point = false;
      }
   }
     
},

endGame(){
   this.setCategory(0);
   this.switcherHandler();
},

  startRound(){
   Mode.round += 1;
   const card = Mode.activeCards[Mode.round - 1];
   this.playWord(card.audioSrc);

 },

 playWord(src){
   const audio = new Audio();
   audio.preload = 'auto';
   audio.src = src;
   audio.play();
 },

 switcherHandler() {
   this.view.switcher.classList.toggle('active');
   this.view.changeBackgroundColor();
   Mode.isTrain = !Mode.isTrain;
   this.changeView();
   if(!Mode.isTrain) {
      this.startRound();
   } 
 },

 menuHandler() {
   let id_category = event.target.getAttribute('data-id');
       this.setCategory(id_category);
       this.view.closeMobileMenu();
 },

// play mode for cards
 changeView(){
    if(Mode.isTrain){
      document.querySelectorAll('.image-link').forEach(el => {
         el.classList.remove('play');
      })
    } else {
      document.querySelectorAll('.image-link').forEach(el => {
         el.classList.add('play');
         
      })
    }
 
 },

 setCategory(id) {
    this.view.cleanPage();
    const category = new Card(id);
    this.view.drawCards(category.data);
    Mode.initGame(category);
 },

};

export default Controller