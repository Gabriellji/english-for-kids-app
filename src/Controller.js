import View from './View';
import Card from './model/Card';
import Menu from './model/Menu';


const Controller = {
 init(){
    // this.dataCards = new Card(0);
    this.dataMenu = new Menu();

    this.view = View;

    this.view.init();
    // this.view.drawCards(this.dataCards.data);
    this.setCategory(0);
    this.view.drowMenuPanel(this.dataMenu.data);


    this.view.switcher.addEventListener('click', (() => {

        this.view.switcher.classList.toggle('active');
        this.view.changeBackgroundColor();
      }).bind(this));

      this.view.link_container.addEventListener('click', ((event) => {
       let id_category = event.target.getAttribute('data-id');
       console.log(id_category);
       this.setCategory(id_category);

      }).bind(this));
 },

 setCategory(id) {
    const category = new Card(id);
    console.log(category.data);
    this.view.drawCards(category.data);
 },

};

export default Controller