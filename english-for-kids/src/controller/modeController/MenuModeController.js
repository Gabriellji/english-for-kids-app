import ModeController from './ModeController';

class MenuModeController extends ModeController {
    constructor(view, model) {
        super(view, model);
    }

    init() {
        this.view.cleanPage();
        this.setCategory();
        this.createCards();
    }

    setCategory(id) {
        this.model.createCategory( {id: '0', title: 'menu', img: null, words: this.data} );
    }
}

export default MenuModeController;