import data from '../data';

class Statistic {
    constructor(){
        this.storage = window.localStorage;
        this.words = this.loadOrCreate();
    }

    getWords(id = 'all'){
        if(id === 'all') {
          return this.words.reduce((acc, category) => {
              return acc.concat(category.words).sort((a, b) => {
                 return a.word.charCodeAt(0) - b.word.charCodeAt(0);
              });
            }, []);
        } else {
            return (this.words.filter( category => category.id === Number(id) ))[0].words;
        }
    }

    setStatistic(id, parameter) { 
        for(let category of this.words) {
            let flag = false;
            for(let word of category.words) {
                if(word.id === Number(id)) {
                   word[parameter] += 1;
                   flag = true;
                    break;
                }
                if(flag) break;
            }
        }
        this.storage.setItem('statistic', JSON.stringify(this.words));
    }

    loadOrCreate() {
        let words = this.storage.getItem('statistic');
        if(!words) {
            words = this.createData();
            return words;
        }
        return JSON.parse(words);
    }

    createData() {
       const words = data.map( category => {
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
                        errorAnswer: 0,
                    })
                )
            }
        });
        this.storage.setItem('statistic', JSON.stringify(words));
        return words
    }

    reset() {
        this.storage.removeItem('statistic');
        this.words = this.createData();
    }
}

export default Statistic