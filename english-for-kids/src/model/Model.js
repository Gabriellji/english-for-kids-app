import Category from './Category';
import eventMixin from '../mixins/eventMixin';
import Menu from './Menu';
import data from '../data';

class Model {
    constructor(mode) {
        this.mode = mode;
        this.data = data;
        this.createMenu(this.data); 
    }

    changeMode() {
        this.mode = this.mode === 'train' ? 'play' : 'train';
        this.emit('mode_changed', this.mode);
    }

    setCategory(id) {
        this.model.createCategory( (this.data.filter( category => category.id === id ))[0] );
    }

    createCategory({id, title, img, words}) {
        this.category = new Category(id, title, img, words);
    }

    createMenu(data) {
        this.menu = new Menu(data);
    }

    
}

Object.assign(Model.prototype, eventMixin);

export default Model;