 
 
    const View = {

    cards: null,
    pictures: null,

    
    init() {
        this.cards = document.querySelector('.main-cards-images');
        // this.pictures = document.querySelectorAll('.')
        // this.cards.appendChild(drawCard());
    },


    drawCard() {

        const actionCards = 
    [
        {
          word: 'cry',
          translation: 'плакать',
          image: 'src/img/cry.jpg',
          audioSrc: 'audio/cry.mp3'
        },
        {
          word: 'dance',
          translation: 'танцевать',
          image: 'src/img/dance.jpg',
          audioSrc: 'audio/dance.mp3'
        },
        {
          word: 'dive',
          translation: 'нырять',
          image: 'src/img/dive.jpg',
          audioSrc: 'audio/dive.mp3'
        },
        {
          word: 'draw',
          translation: 'рисовать',
          image: 'src/img/draw.jpg',
          audioSrc: 'audio/draw.mp3'
        },
        {
          word: 'fish',
          translation: 'ловить рыбу',
          image: 'src/img/fish.jpg',
          audioSrc: 'audio/fish.mp3'
        },
        {
          word: 'fly',
          translation: 'летать',
          image: 'src/img/fly.jpg',
          audioSrc: 'audio/fly.mp3'
        },
        {
          word: 'hug',
          translation: 'обнимать',
          image: 'src/img/hug.jpg',
          audioSrc: 'audio/hug.mp3'
        },
        {
          word: 'jump',
          translation: 'прыгать',
          image: 'src/img/jump.jpg',
          audioSrc: 'audio/jump.mp3'
        }
      ];
      
          actionCards.forEach(item => {
            const { word, translation, image, audioSrc } = item;
            const card = document.createElement('div');
            card.classList.add('image-link');
            const img = document.createElement('img');
            img.setAttribute('src', image);
            img.src = image;
           
            
            card.innerHTML = word;
            this.cards.appendChild(card);
            card.appendChild(img);
          })

        }
};


export default View;

