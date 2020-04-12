import cards from '../data/cards.js'



class Card {
    constructor(categories_id){
        this.data = cards.filter(item => item.categories_id == categories_id);
    }
}

export default Card