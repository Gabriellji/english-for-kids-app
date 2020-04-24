/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
import eventMixin from '../mixins/eventMixin';


class View {
	constructor() {
		this.body = document.querySelector('body');
		this.logo = document.querySelector('.logo');
		this.menu = document.querySelector('#menu');
		this.navigation = document.querySelector('.header__navigation');
		this.hamburger = document.querySelector('.hamburger');
		this.cardsContainer = document.querySelector('.main-cards-images');
		this.scoreContainer = document.querySelector('.score');
		this.card = document.querySelector('.image-link');
		this.resetStat = document.querySelector('.reset-button');
		this.statContainer = document.querySelector('.statist');
		this.link = document.querySelector('li');


		this.statTable = document.querySelector('#tbody');

		this.switcher = document.querySelector('input');
		this.overlay = document.querySelector('.overlay');

		this.hamburger.addEventListener('click', this.clickHamburgerHandler.bind(this));
		this.navigation.addEventListener('click', this.clickLinksHandler.bind(this));
		this.switcher.addEventListener('click', this.clickSwitcherHandler.bind(this));
		this.cardsContainer.addEventListener('click', this.clickCardsHandler.bind(this));
		this.resetStat.addEventListener('click', this.clickResetHandler.bind(this));

		this.cardsContainer.onclick = (e) => {
			this.closeMobileMenu(e);
		};

		this.logo.onclick = (e) => {
			this.closeMobileMenu(e);
		};

		this.scoreContainer.onclick = (e) => {
			this.closeMobileMenu(e);
		};

		this.statContainer.onclick = (e) => {
			this.closeMobileMenu(e);
		};
	}

	clickResetHandler() {
		this.emit('reset_stat_clicked');
	}

	clickCardsHandler(e) {
		const card = e.target.closest('.card');
		const card_id = card.getAttribute('data-id');
		this.emit('card_clicked', card_id);
		this.closeMobileMenu();
	}

	clickHamburgerHandler() {
		if (this.navigation.style.left === '-108%' || this.navigation.style.left === '') {
			this.openMobileMenu();
		} else {
			this.closeMobileMenu();
		}
	}

	clickLinksHandler(e) {
		this.cleanScoreContainer();
		if (e.target.tagName === 'LI') {
			this.closeMobileMenu();
			if (e.target.id === 'maine-page__link') {
				this.emit('main_page_requested');
				this.activeLinkMainStatisticView('#maine-page__link');
			} else if (e.target.id === 'statistic__link') {
				this.emit('statistic_requested');
				this.activeLinkMainStatisticView('#statistic__link');
			} else {
				this.emit('category_requested', e.target.getAttribute('data-id'));
				this.activeLinkView(e.target.getAttribute('data-id'));
			}
		}
	}

	activeLinkMainStatisticView(id) {
		const mainLinks = document.querySelector(id);
		const links = this.menu.querySelectorAll('li');
		links.forEach((e) => {
			e.classList.remove('active-link');
		});
		mainLinks.classList.add('active-link');
	}

	activeLinkView(id) {
		const links = this.menu.querySelectorAll('li');
		links.forEach((e) => {
			e.classList.remove('active-link');
		});
		const el = this.menu.querySelector(`li[data-id="${id}"]`);
		el.classList.add('active-link');
	}

	leaveCardHandler(e) {
		e.target.classList.remove('is-flipped');
	}

	clickSwitcherHandler() {
		this.emit('toggle_switched');
	}

	clickPlayButtonHandler() {
		this.emit('play_button_pushed');
		this.repeatViewButton();
	}

	repeatViewButton() {
		const button = document.querySelector('.button-start');
		button.classList.add('repeat');
	}

	openMobileMenu() {
		this.overlay.classList.add('hidden-overlay');
		this.hamburger.classList.add('clicked__hamburger');
		this.navigation.style.left = '0%';
	}

	closeMobileMenu() {
		this.hamburger.classList.remove('clicked__hamburger');
		this.navigation.style.left = '-108%';
	}

	flipCard(id) {
		const card = this.cardsContainer.querySelector(`[data-id="${id}"]`);
		card.classList.toggle('is-flipped');

		setTimeout((() => {
			card.addEventListener('mouseleave', this.leaveCardHandler.bind(this));
		}), 800);
	}

	playModeView() {
		const card = document.querySelectorAll('.image-link');
		card.forEach((el) => {
			el.classList.add('play');
		});
	}

	showStatistic() {
		this.statContainer.style.display = 'flex';
	}

	hideStatistic() {
		this.statContainer.style.display = 'none';
	}

	clickedCard(id) {
		const card = this.cardsContainer.querySelector(`[data-id="${id}"]`);
		card.classList.add('clicked-card');
	}

	cleanPage() {
		this.cardsContainer.innerHTML = '';
	}

	cleanScoreContainer() {
		this.scoreContainer.innerHTML = '';
	}

	drawScore(roundArray) {
		this.scoreContainer.innerHTML = '';
		roundArray.forEach((round) => {
			const star = document.createElement('img');
			if (round) {
				star.setAttribute('src', '/assets/img/star-win.svg');
			} else {
				star.setAttribute('src', '/assets/img/star.svg');
			}
			this.scoreContainer.appendChild(star);
		});
	}

	drawCard(id, word, img, translation, isArrow) {
		const container = document.createElement('div');
		container.classList.add('scene');

		const innerContainer = document.createElement('div');
		innerContainer.classList.add('card');
		innerContainer.setAttribute('data-id', id);

		container.appendChild(innerContainer);

		const card = document.createElement('div');
		card.classList.add('card__face', 'card__face--front', 'image-link');

		const cardFacaBack = document.createElement('div');
		cardFacaBack.classList.add('card__face', 'card__face--back', 'image-link');

		const image = document.createElement('img');
		image.setAttribute('src', img);
		image.setAttribute('alt', word);

		const imageBack = document.createElement('img');
		imageBack.setAttribute('src', img);
		imageBack.setAttribute('alt', word);

		const title = document.createElement('span');
		title.textContent = word;

		const arr = document.createElement('img');
		arr.classList.add('arrow');
		arr.setAttribute('src', '../assets/img/rotate.svg');

		const titleBack = document.createElement('span');
		titleBack.textContent = translation;
		card.appendChild(image);
		card.appendChild(title);

		if (isArrow) {
			card.appendChild(arr);
		}

		cardFacaBack.appendChild(imageBack);
		cardFacaBack.appendChild(titleBack);
		innerContainer.appendChild(card);
		innerContainer.appendChild(cardFacaBack);
		this.cardsContainer.appendChild(container);
	}

	drawCards(arrayCards, isArrow = false) {
		arrayCards.forEach(({
			id, word, translation, img,
		}) => {
			this.drawCard(id, word, img, translation, isArrow);
		});
	}

	drowMenuItem(text, id) {
		const listLink = document.createElement('li');
		listLink.setAttribute('data-id', id);
		listLink.textContent = text;

		this.menu.appendChild(listLink);
	}

	drawStatistic(arr) {
		this.statTable.innerHTML = '';
		arr.forEach((word) => {
			const tr = document.createElement('tr');
			const text = document.createElement('td');
			const translate = document.createElement('td');
			const trainClicks = document.createElement('td');
			const correct = document.createElement('td');
			const error = document.createElement('td');
			const percent = document.createElement('td');

			text.innerText = word.word;
			translate.innerText = word.translation;
			trainClicks.innerText = word.trainClicks;
			correct.innerText = word.correctAnswer;
			error.innerText = word.errorAnswer;
			percent.innerText = ((word.errorAnswer / (word.correctAnswer + word.errorAnswer)) * 100) || 0;

			tr.appendChild(text);
			tr.appendChild(translate);
			tr.appendChild(trainClicks);
			tr.appendChild(correct);
			tr.appendChild(error);
			tr.appendChild(percent);

			this.statTable.appendChild(tr);
		});
	}

	drowMenu(arrayMenu) {
		arrayMenu.items.forEach((link) => {
			this.drowMenuItem(link.word, link.id);
		});
	}

	drawButton() {
		const buttonContainer = document.createElement('div');
		buttonContainer.classList.add('button-box');
		const button = document.createElement('button');
		button.classList.add('button-start');
		button.innerText = 'Start Game';
		buttonContainer.appendChild(button);
		this.cardsContainer.appendChild(buttonContainer);
		button.addEventListener('click', this.clickPlayButtonHandler.bind(this));
	}

	changeBackgroundColor(mode) {
		const imageColor = document.querySelectorAll('.image-link');
		if (mode === 'play') {
			this.navigation.style.background = 'linear-gradient(to bottom left, #00cc00 0%, #ffcc00 100%)';
			imageColor.forEach((b) => b.style.background = 'linear-gradient(to bottom left, #00cc00 0%, #ffcc00 100%)');
		} else if (mode === 'train') {
			this.navigation.style.background = 'linear-gradient(to top right, #ffcc00 0%, #ff00ff 100%)';
			imageColor.forEach((b) => b.style.background = 'linear-gradient(to top right, #ffcc00 0%, #ff00ff 100%)');
		}
	}

	showWinResult() {
		const image = document.querySelector('.finish-round-succes');
		image.style.visibility = 'unset';
	}

	showFailResult(error) {
		const errorText = document.querySelector('.error');
		errorText.innerText = error;
		const image = document.querySelector('.finish-round-failure');
		image.style.visibility = 'unset';
	}

	hideResult() {
		const image = document.querySelectorAll('.image');
		image.forEach((img) => img.style.visibility = 'hidden');
	}
}

Object.assign(View.prototype, eventMixin);

export default View;
