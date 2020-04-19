import eventMixin from '../../mixins/eventMixin';

class ModeController {
	constructor(view, model) {
		this.view = view;
		this.model = model;
	}

	createCards() {
		this.view.cleanPage();
		this.view.drawCards(this.model.category.cards);
	}

	playWord(src) {
		const audio = new Audio();
		audio.preload = 'auto';
		audio.src = src;
		audio.play();
	}
}

Object.assign(ModeController.prototype, eventMixin);

export default ModeController;
