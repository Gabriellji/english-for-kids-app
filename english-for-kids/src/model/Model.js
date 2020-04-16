import Category from './Category';
import data from '../data';
import eventMixin from '../mixins/eventMixin';

class Model {
    constructor(mode) {
        this.mode = mode;
        this.setCategory(data);
    }

    changeMode() {
        this.mode = this.mode === 'train' ? 'play' : 'train';
        this.emmit('mode_changed', this.mode);
    }

    createCategory({id, title, img, words}) {
        this.category = new Category(id, title, img, words);
    }

    
}

Object.assign(Model.prototype, eventMixin);

export default Model;