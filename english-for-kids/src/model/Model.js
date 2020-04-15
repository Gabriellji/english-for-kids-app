import Category from './Category';
import data from '../data';

class Model {
    constructor(mode) {
        this.mode = mode;
        this.data = data;
        this.setCategory(data);
    }

    createCategory({id, title, img, words}) {
        this.category = new Category(id, title, img, words);
    }

    setCategory(id) {
        this.createCategory( (this.data.filter( category => category.id === id ))[0] );
    }
}
