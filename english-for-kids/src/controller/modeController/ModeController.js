class ModeController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    createCards(){
        this.view.cleanPage();
        this.view.drawCards(this.model.category.cards);
    }
}

export default ModeController;