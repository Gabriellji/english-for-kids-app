import ModeController from './ModeController';

class TrainModeController extends ModeController {
    constructor(view, model) {
        super(view, model);
        this.createCards();
    }

    cardHandler(id) {
     
    }
}

export default TrainModeController;