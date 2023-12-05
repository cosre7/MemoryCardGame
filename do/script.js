// shuffle
// check for match
// disable card
// unflip card

const cards = document.querySelectorAll(".card");
const orderList = [0, 1, 2, 3];
let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;

function shuffleArr(arr) {
    arr.forEach((_, index) => {
        // index만 사용하고싶을 때 -> 앞의 값은 _ 처리 가능 
        const randomIdx = Math.floor(Math.random() * arr.length);
        [arr[randomIdx], arr[index]] = [arr[index], arr[randomIdx]];
    })
}
function shuffle() {
    shuffleArr(orderList);
    cards.forEach((card, index) => {
        card.style.order = orderList[index];
    })
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
    }, 1200);
}

function disabledCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

function checkForMatch() {
    const isMatch = firstCard.dataset.name === secondCard.dataset.name;

    if (isMatch) {
        // disable card
        disabledCards();
    } else {
        // unflip card
        unflipCards();
    }
}

function flipCard() {
    if (lockBoard) return;

    if (this === firstCard) return;

    this.classList.add('flip');
    // 기존에 뒤집힌 카드가 없을 때 -> 첫 번째 카드인 경우
    if (!hasFlippedCard) { 
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    // 두 번째 카드인 경우 
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
}

cards.forEach((card) => {
    card.addEventListener("click", flipCard);
});