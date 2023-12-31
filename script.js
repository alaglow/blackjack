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
    evaluatePlayerScore();
}

function renderPlayerCard(card) {
    let cardImgEl = createCardImage(card);
    document.getElementById('user-cards').appendChild(cardImgEl);
}

function renderComputerCard(card) {
    let cardImgEl = createCardImage(card);
    document.getElementById('computer-cards').appendChild(cardImgEl)
}

function createCardImage(card) {
    let cardImgEl = document.createElement('img');
    cardImgEl.src = getCardImage(card);
    cardImgEl.className = "card-img";
    return cardImgEl;
}

function evaluatePlayerScore() {
    if (playerPoints > 20) {
        document.getElementById('hit-btn').disabled = true;
    }

    if (playerPoints > 21) {
        document.getElementById("result-el").textContent = "You lost!"
    } else if (playerPoints === 21) {
        document.getElementById("result-el").textContent = "You win!"
    }
}

function evaluateAllScores() {
    if (computerPoints === 21 || computerPoints >= playerPoints) {
        document.getElementById("result-el").textContent = "Computer win"
    } else {
        document.getElementById("result-el").textContent = "You win"
    }
}


function onStand() {
    while (shouldComputerDraw()) {
        let card = drawCard();
        renderComputerCard(card);
        addComputerPoints(card);
    }
    evaluateAllScores();
}

function shouldComputerDraw() {
    if (computerPoints > 20 || computerPoints > playerPoints) {
        return false;
    }
    return true;
}

function onReset() {
    playerPoints = 0;
    computerPoints = 0;
    document.getElementById("player-points-el").textContent = playerPoints;
    document.getElementById("computer-points-el").textContent = computerPoints;
    document.getElementById('hit-btn').disabled = false;
    document.getElementById("result-el").textContent = "Let's play"

    const computerCards = document.getElementById('computer-cards')
    removeAllChildren(computerCards);
    const playerCards = document.getElementById('user-cards')
    removeAllChildren(playerCards)
}

function removeAllChildren(element) {
    while (element.lastElementChild) {
        element.removeChild(element.lastElementChild);
    }
}
