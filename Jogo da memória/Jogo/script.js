const images = [
    'abacaxi.png', 'abacaxi.png',
    'abacate.png', 'abacate.png',
    'banana.png', 'banana.png',
    'manga.png', 'manga.png',
    'melancia.png', 'melancia.png',
    'morango.png', 'morango.png',
    'pera.png', 'pera.png',
    'uva.png', 'uva.png'
];

const gameBoard = document.getElementById('gameBoard');
let flippedCards = [];
let matchedPairs = 0;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
    const shuffledImages = shuffle(images);
    shuffledImages.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card', 'hidden');
        card.dataset.image = image;
        card.style.backgroundImage = "url('assets/back.png')";

        card.addEventListener('click', () => flipCard(card));
        gameBoard.appendChild(card);
    });
}

function flipCard(card) {
    if (flippedCards.length < 2 && !flippedCards.includes(card)) {
        card.classList.remove('hidden');
        card.style.backgroundImage = `url('assets/${card.dataset.image}')`;
        flippedCards.push(card);
    }

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.image === card2.dataset.image) {
        matchedPairs++;
        if (matchedPairs === images.length / 2) {
            setTimeout(() => {
                // Redireciona para a página de vitória que você já possui
                window.location.href = "../final/tela_vitoria.html"
            }, 500);
        }
    } else {
        card1.classList.add('hidden');
        card1.style.backgroundImage = "url('assets/back.png')";
        card2.classList.add('hidden');
        card2.style.backgroundImage = "url('assets/back.png')";
    }
    flippedCards = [];
}

createBoard();
