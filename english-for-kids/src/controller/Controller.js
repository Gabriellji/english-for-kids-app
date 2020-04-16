class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.modeController = {};

        this.view.on('toggle_switched', this.toggleHandler.bind(this));
        this.model.on('mode_changed', this.modeHandler.bind(this));
    }

    toggleHandler() {
        this.model.changeMode();
    }

    modeHandler(mode) {
        this.view.changeBackgroundColor(mode);
    }
}