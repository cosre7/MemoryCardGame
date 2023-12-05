// shuffle
// check for match
// disable card
// unflip card

const cards = document.querySelectorAll(".card");
console.log(cards);

const orderList = [0, 1, 2, 3];

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

function flipCard(e) {
    this.classList.add('flip');
}

cards.forEach((card) => {
    card.addEventListener("click", flipCard);
});