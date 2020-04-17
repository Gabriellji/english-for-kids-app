import ModeController from './ModeController';

class MenuModeController extends ModeController {
    constructor(view, model) {
        super(view, model);
        this.createCards();
    }

    // init() {
    //     this.createCards();
    // }

    createCards(){
        this.view.cleanPage();
        this.view.drawCards(this.model.menu.items);
    }
}

export default MenuModeController;