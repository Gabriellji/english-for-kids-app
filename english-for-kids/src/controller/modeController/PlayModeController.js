import ModeController from './ModeController'

class PlayModeController extends ModeController {
    constructor(view, model) {
        super(view, model);
        this.init();
        this.createCards();
    }

    init() {
        this.round = 1;
        this.roundList = this.model.getAllCards().map((el) => {
            return {...el, point: false};
        });
        this.shuffle(this.roundList);
        this.roundStart();
    }

    roundStart() {
        this.playWord(this.roundList[this.round - 1].audioSrc);
    }

    cardHandler(id) {
        if(this.checkCorrectAnswer(id)) {
            this.round++ ;
           this.playWord('/assets/audio/correct.mp3');
           this.roundStart();
        } else {
            this.playWord('/assets/audio/error.mp3');
        };
    }

    checkCorrectAnswer(id){
        return Number(id) === this.roundList[this.round - 1].id;
    }

    shuffle(activeCards) {
        activeCards.sort(function() {return 0.5 - Math.random() });
    }
}

export default PlayModeController;