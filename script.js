let playerPoints = 0;

function drawCard(){
return Math.floor(Math.random()*13)+1; 
}

function getCardPoints(card){
    if (card === 1){
        return 11;
    } else if (card === 10 || card === 11 || card === 12 || card === 13){
        return 10;
    } else{
        return card;
    }
}

function getCardImage(card){
        return `images2/${card}.jpg`
}

function addUserPoints(card) {
    let sumEl = document.getElementById("sum-el");
    playerPoints += getCardPoints(card);
    sumEl.textContent = "Sum:" + " " + playerPoints;

}

function onHit(){
    let card = drawCard();
    let cardImgEl = document.createElement('img')
    cardImgEl.src = getCardImage(card)
    document.getElementById('user-cards').appendChild(cardImgEl);
    addUserPoints(card);
}