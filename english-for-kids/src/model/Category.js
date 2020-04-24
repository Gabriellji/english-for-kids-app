/* eslint-disable class-methods-use-this */
import Card from './Card';

class Category {
	constructor(id, title, img, words) {
		this.id = id;
		this.title = title;
		this.img = img;
		this.cards = this.createCards(words);
	}

	createCards(array) {
		const cards = [];
		array.forEach(({
			id, word, translation, img, audioSrc,
		}) => {
			cards.push(new Card(id, word, translation, img, audioSrc));
		});
		return cards;
	}
}

export default Category;
