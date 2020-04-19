import Card from './Card.js';

class Menu {
	constructor(items) {
		this.items = this.createItems(items);
	}

	createItems(array) {
		const items = [];
		array.forEach(({ id, title, img }) => {
			items.push(new Card(id, title, null, img));
		});
		return items;
	}
}

export default Menu;
