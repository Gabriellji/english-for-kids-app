
import View from './View';
import Card from './model/Card';

View.init();
// View.drawCard("src/img/cat.jpg", 'hgjgcjgxjhgd');

const dataCards = new Card(0);

// const array = [{image: "src/img/cat.jpg", word: 'fghfjg'}, {image:"src/img/cat.jpg", word: 'fgfghxfh'}];

View.drawCards(dataCards.data);

// View.cleanPage();