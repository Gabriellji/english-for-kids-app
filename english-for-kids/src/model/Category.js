import Card from './Card.js';

class Category {
    constructor(id, title, img, words) {
        this.id = id;
        this.title = title;
        this.img = img;
        this.cards = this.createCards(words);
    }

    createCards(array) {
        const cards = [];
        array.forEach(function ({ id, word, translate, img, audio }) {
            cards.push(new Card(id, word, translate, img, audio));
        });
        return cards;
    }
}

export default Category;