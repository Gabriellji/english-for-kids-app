import MenuModeController from './modeController/MenuModeController';
import TrainModeController from './modeController/TrainModeController';
class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        
        this.setModeController(true);

        this.view.on('toggle_switched', this.toggleHandler.bind(this));
        this.view.on('main_page_requested', (() => this.setModeController(true)).bind(this));
        this.view.on('card_clicked', this.modeController.cardHandler.bind(this.modeController));
        this.view.on('category_requested', this.model.setCategory.bind(this.model));
        this.modeController.on('category_requested', this.model.setCategory.bind(this.model));
        this.model.on('mode_changed', this.modeHandler.bind(this));
        this.model.on('category_changed', this.setModeController.bind(this));
    }

    setModeController(isMenu = false){
        if(isMenu) {
            this.modeController = new MenuModeController(this.view, this.model);
        } else {
            if (this.modeHandler.mode === 'train') {
                this.modeController = new TrainModeController(this.view, this.model);
            }
        }
    }

    toggleHandler() {
        this.model.changeMode();
    }

    modeHandler(mode) {
        this.view.changeBackgroundColor(mode);
    }
}

export default Controller;