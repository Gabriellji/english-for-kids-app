import ModeController from './ModeController'

class PlayModeController extends ModeController {
    constructor(view, model) {
        super(view, model);
        this.isStart = false;
        this.points = [];
        this.createCards();
        this.init();
        this.view.on('play_button_pushed', this.roundStart.bind(this));
      
    }

    init() {
        this.view.playModeView();
        this.view.drawButton(); 
        this.round = 1;
        this.roundList = this.model.getAllCards();
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
        if(this.checkCorrectAnswer(id)) {
           this.setPoint(true);
           this.model.statistic.setStatistic(id, 'correctAnswer');
           this.view.clickedCard(id);
           this.playWord('/assets/audio/correct.mp3');
           this.round++;
           this.roundStart();
        } else {
            this.setPoint(false);
            this.model.statistic.setStatistic(id, 'errorAnswer');
            this.playWord('/assets/audio/error.mp3');
        }
        
    }

    gameOver() {
        const score = this.points.reduce((acc, point) => point ? acc * 1 : acc * 0, 1);
        this.view.off('play_button_pushed');
        if (score > 0) {
            this.view.showWinResult();
            this.playWord('/assets/audio/success.mp3'); 
        } 
        else {
            this.view.showFailResult();
            this.playWord('/assets/audio/failure.mp3');
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
        this.points.push(point);
        this.view.drawScore(this.points);
    }

    shuffle(activeCards) {
        activeCards.sort(function() {return 0.5 - Math.random() });
    }
}

export default PlayModeController;