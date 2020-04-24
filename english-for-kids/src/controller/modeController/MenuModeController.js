import ModeController from './ModeController';

class MenuModeController extends ModeController {
	constructor(view, model) {
		super(view, model);
		this.createCards();
	}

	createCards() {
		this.view.cleanPage();
		this.view.drawCards(this.model.menu.items);
	}

	cardHandler(id) {
		this.emit('category_requested', id);
		this.view.activeLinkView(id);
	}
}

export default MenuModeController;
