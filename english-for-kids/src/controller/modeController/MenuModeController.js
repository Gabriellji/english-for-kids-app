import ModeController from './ModeController';

class MenuModeController extends ModeController {
    constructor(view, model) {
        super(view, model);
        this.createCards();
    }

    createCards(){
        this.view.cleanPage();
        this.view.drawCards(this.model.menu.items);
        this.hideArrows();
    }

    cardHandler(id) {
       this.emit('category_requested', id);
    }

    hideArrows() {
        document.querySelectorAll('.arrow').forEach(el => {
          el.classList.add('hidden');
      })
      }
}

export default MenuModeController;