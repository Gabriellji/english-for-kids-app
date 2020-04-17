import ModeController from './ModeController';

class TrainModeController extends ModeController {
    constructor(view, model) {
        super(view, model);
        this.createCards();
    }

    cardHandler(id) {
     this.view.flipCard(id);
     this.playWord(this.model.getCard(id).audioSrc);
    }
}

export default TrainModeController;