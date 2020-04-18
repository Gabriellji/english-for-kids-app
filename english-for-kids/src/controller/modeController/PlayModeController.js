import ModeController from './ModeController'

class PlayModeController extends ModeController {
    constructor(view, model) {
        super(view, model);
        this.isStart = false;
        this.createCards();
        this.init();
        this.view.on('play_button_pushed', this.roundStart.bind(this));
      
    }

    init() {
        this.view.drawButton();
        this.round = 1;
        this.roundList = this.model.getAllCards().map((el) => {
            return {...el, point: null};
        });
        this.shuffle(this.roundList);
    
    }

    roundStart() {
        this.isStart = true;
        if(this.round > this.roundList.length) {
            this.gameOver();
        } else {
            this.playWord(this.roundList[this.round - 1].audioSrc);
        }
        
    }

    cardHandler(id) {
        if(!this.isStart) return;
        this.view.drawScore(this.roundList.map(round => round.point).filter(p => p != null));
        if(this.checkCorrectAnswer(id)) {
           this.setPoint(true);
           this.round++ ;
           this.playWord('/assets/audio/correct.mp3');
           this.roundStart();
        } else {
            this.setPoint(false);
            this.playWord('/assets/audio/error.mp3');
        }
        
    }

    gameOver() {
        const points = this.roundList.map(round => round.point);
        const score = points.reduce((acc, point) => point ? acc + 1 : acc, 0);
        this.view.off('play_button_pushed');
        if (score === this.roundList.length) {
            this.view.showWinResult();
            
        } 
        else {
            this.view.showFailResult();
        }
       this.view.cleanScoreContainer();

        setTimeout((() => {
            this.view.hideResult();
             this.emit('main_page_requested');
        }).bind(this), 2000);
    }

    checkCorrectAnswer(id){
        return Number(id) === this.roundList[this.round - 1].id;
    }

    setPoint(point) {
        if(this.roundList[this.round -1 ].point === null) {
            this.roundList[this.round -1].point = point;
        }
    }

    shuffle(activeCards) {
        activeCards.sort(function() {return 0.5 - Math.random() });
    }
}

export default PlayModeController;