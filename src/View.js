 
 
    const View = {

    cards: null,
    container: null,
    picture: null,


    
    init() {
        this.cards = document.querySelector('.main-cards-images');
    },

    renderCard() {

        const actionContainer = document.createElement('div');
        actionContainer.classList.add('main-cards-images');
        this.cards.replaceWith(actionContainer);
    },



    drawCard() {

        const actionCards = 
    [
        {
          word: 'cry',
          translation: 'плакать',
          image: 'src/img/cry.jpg',
          audioSrc: 'src/audio/cry.mp3'
        },
        {
          word: 'dance',
          translation: 'танцевать',
          image: 'src/img/dance.jpg',
          audioSrc: 'src/audio/dance.mp3'
        },
        {
          word: 'dive',
          translation: 'нырять',
          image: 'src/img/dive.jpg',
          audioSrc: 'src/audio/dive.mp3'
        },
        {
          word: 'draw',
          translation: 'рисовать',
          image: 'src/img/draw.jpg',
          audioSrc: 'src/audio/draw.mp3'
        },
        {
          word: 'fish',
          translation: 'ловить рыбу',
          image: 'src/img/fish.jpg',
          audioSrc: 'src/audio/fish.mp3'
        },
        {
          word: 'fly',
          translation: 'летать',
          image: 'src/img/fly.jpg',
          audioSrc: 'src/audio/fly.mp3'
        },
        {
          word: 'hug',
          translation: 'обнимать',
          image: 'src/img/hug.jpg',
          audioSrc: 'src/audio/hug.mp3'
        },
        {
          word: 'jump',
          translation: 'прыгать',
          image: 'src/img/jump.jpg',
          audioSrc: 'src/audio/jump.mp3'
        }
      ];

     
      
          actionCards.forEach(item => {
            const { word, translation, image, audioSrc } = item;
            const card = document.createElement('div');
            card.classList.add('image-link');
            const img = document.createElement('img');
            img.setAttribute('src', image);
            img.src = image;
            const audio = document.createElement('audio');
            audio.setAttribute('src', audioSrc);
            audio.src = audioSrc;
           
            
            card.innerHTML = word;
            document.querySelector('.main-cards-images').appendChild(card);
            card.appendChild(img);
            card.appendChild(audio);

          })
         
        },

};


export default View;

