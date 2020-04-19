import ModeController from './ModeController';

class TrainModeController extends ModeController {
    constructor(view, model) {
        super(view, model);
        this.createCards();
    }

    createCards(){
        this.view.cleanPage();
        this.view.drawCards(this.model.category.cards, true);
    }

    cardHandler(id) {
     this.view.flipCard(id);
     this.playWord(this.model.getCard(id).audioSrc);
     this.model.statistic.setStatistic(id, 'trainClicks');
    }
}

export default TrainModeController;