import MenuModeController from './modeController/MenuModeController';
class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        
        this.setModeController('menu');

        this.view.on('toggle_switched', this.toggleHandler.bind(this));
        this.view.on('main_page_requested', (() => this.setModeController('menu')).bind(this));
        this.model.on('mode_changed', this.modeHandler.bind(this));
    }

    setModeController(mode){
        if(mode === 'menu') {
            this.modeController = new MenuModeController(this.view, this.model);
            this.modeController.setCategory(0);
        }
    }

    toggleHandler() {
        this.model.changeMode();
    }

    modeHandler(mode) {
        this.view.changeBackgroundColor(mode);
    }
}