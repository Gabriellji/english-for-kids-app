import Category from './Category';
import eventMixin from '../mixins/eventMixin';
import Menu from './Menu';
import Statistic from './Statistic';
import data from '../data';

class Model {
	constructor(mode) {
		this.mode = mode;
		this.isMenuMode = true;
		this.data = data;
		this.statistic = new Statistic();
		this.createMenu(this.data);
	}

	changeMode() {
		this.mode = this.mode === 'train' ? 'play' : 'train';
		this.emit('mode_changed', this.mode);
	}

	setCategory(id) {
		this.createCategory((this.data.filter((category) => category.id === Number(id)))[0]);
		this.isMenuMode = false;
		this.emit('category_changed');
	}

	getCard(id) {
		return (this.category.cards.filter((card) => card.id === Number(id)))[0];
	}

	getAllCards() {
		return this.category.cards;
	}

	createCategory({
		id, title, img, words,
	}) {
		this.category = new Category(id, title, img, words);
	}

	createMenu(data) {
		this.menu = new Menu(data);
	}
}

Object.assign(Model.prototype, eventMixin);

export default Model;
