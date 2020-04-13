

const mode = {
  isTrain: true,
  activeCards: [],
  round: 0,
   



shuffle (activeCards) {
        activeCards.sort(function() {return 0.5 - Math.random() });
    },

initGame(cards) {
    this.round = 0;
    this.shuffle(cards.data);
    this.activeCards = cards.data.map((el) => {
        return {...el, point: false};
    });
}

};



export default mode;