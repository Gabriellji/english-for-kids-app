import data from '../data';

class Statistic {
    constructor(){
        this.storage = window.localStorage;
        this.words = this.loadOrCreate();
    }

    loadOrCreate() {
        words = this.storage.getItem('statistic');
        if(!words) {
            words = this.createData();
            return words;
        }
        return JSON.parse(words);
    }

    createData() {
        words = data.map( category => {
            return {
                id: category.id,
                title: category.title,
                words: category.words.map(
                    word => ({
                        id: word.id,
                        word: word.word,
                        translation: word.translation,
                        trainClicks: 0,
                        correctAnswer: 0,
                        errorAnswer: 0
                    })
                )
            }
        });
        this.storage.setItem('statistic', JSON.stringify(words));
        return words
    }
}

export default Statistic