import Category from './Category';
import eventMixin from '../mixins/eventMixin';

class Model {
    constructor(mode) {
        this.mode = mode;
    }

    changeMode() {
        this.mode = this.mode === 'train' ? 'play' : 'train';
        this.emit('mode_changed', this.mode);
    }

    createCategory({id, title, img, words}) {
        this.category = new Category(id, title, img, words);
    }

    
}

Object.assign(Model.prototype, eventMixin);

export default Model;