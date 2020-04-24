/* eslint-disable class-methods-use-this */
import Card from './Card';

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
