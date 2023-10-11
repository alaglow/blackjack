let playerPoints = 0;
let computerPoints = 0;

function drawCard() {
    return Math.floor(Math.random() * 13) + 1;
}

function getCardPoints(card) {
    if (card === 1) {
        return 11;
    } else if (card === 10 || card === 11 || card === 12 || card === 13) {
        return 10;
    } else {
        return card;
    }
}

function getCardImage(card) {
    return `images/${card}.jpg`
}

function addUserPoints(card) {
    playerPoints += getCardPoints(card);

    document.getElementById("player-points-el").textContent = playerPoints;
}

function addComputerPoints(card) {
    computerPoints += getCardPoints(card);

    document.getElementById("computer-points-el").textContent = computerPoints;
}

function onHit() {
    let card = drawCard();
    renderPlayerCard(card);
    addUserPoints(card);
    evaluateScore();
}

function renderPlayerCard(card) {
    let cardImgEl = document.createElement('img');
    cardImgEl.src = getCardImage(card);
    document.getElementById('user-cards').appendChild(cardImgEl);
}

function renderComputerCard(card) {
    let cardImgEl = document.createElement('img');
    cardImgEl.src = getCardImage(card);
    document.getElementById('computer-cards').appendChild(cardImgEl);
}

function evaluateScore() {
    if (playerPoints > 20) {
        document.getElementById('hit-btn').disabled = true;
    }

    if (playerPoints > 21) {
        document.getElementById("result-el").textContent = "You lost!"
    } else if (playerPoints === 21) {
        document.getElementById("result-el").textContent = "You win!"
    }
}

function onStand() {
    while (shouldComputerDraw()) {
        let card = drawCard();
        renderComputerCard(card);
        addComputerPoints(card);
    }
}

function shouldComputerDraw() {
    if (computerPoints > 20 || computerPoints > playerPoints) {
        return false;
    }
    return true;
}