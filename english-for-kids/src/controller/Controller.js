import MenuModeController from './modeController/MenuModeController';
import TrainModeController from './modeController/TrainModeController';
import PlayModeController from './modeController/PlayModeController';
class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.view.drowMenu(this.model.menu);
        
        this.setModeController(true);

        this.view.on('toggle_switched', this.toggleHandler.bind(this));
        this.view.on('main_page_requested', (() => this.setModeController(true)).bind(this));
        this.view.on('statistic_requested', this.getStatistic.bind(this));
        this.view.on('category_requested', this.model.setCategory.bind(this.model));
        this.model.on('mode_changed', this.modeHandler.bind(this));
        this.model.on('category_changed', this.setModeController.bind(this));
        this.view.on('reset_stat_clicked', (() => { this.model.statistic.reset();
        this.getStatistic();
        }).bind(this));
    }

    setModeController(isMenu = false){
        this.view.hideStatistic();
        if(this.modeController){
            this.view.off('card_clicked', this.modeController.cardHandler.bind(this.modeController));
        }
        if(isMenu) {
            this.model.isMenuMode = true;
            this.modeController = new MenuModeController(this.view, this.model);
            this.modeController.on('category_requested', this.model.setCategory.bind(this.model));
        } else {
            if (this.model.mode === 'train') {
                this.modeController = new TrainModeController(this.view, this.model);
            }
            if (this.model.mode === 'play') {
                this.modeController = new PlayModeController(this.view, this.model);
                this.modeController.on('main_page_requested', (() => this.setModeController(true)).bind(this));
            }
        }
        this.view.on('card_clicked', this.modeController.cardHandler.bind(this.modeController));
    }

    getStatistic() {
        this.view.drawStatistic(this.model.statistic.getWords());
        this.view.cleanPage();
        this.view.showStatistic();
    }

    toggleHandler() {
        this.model.changeMode();
    }

    modeHandler(mode) {
        if(!this.model.isMenuMode) {
            this.setModeController();
        }
        this.view.changeBackgroundColor(mode);
    }
}

export default Controller;