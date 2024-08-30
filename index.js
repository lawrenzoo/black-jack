let textEl = document.getElementById("text-el");
let cardEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

// Initial requirements to start
let message = " ";
cardEl.textContent = "Cards: ";
textEl.textContent = "Want to play a round?";
let cards = [];
let sum = "";

// Booleans to control the flow of the game
let hasBlackJack = false;  // This variable is used when you have a blackjack (sum === 21)
let isAlive = false;       // This variable is used when the sum is less than or equal to 21

// Function to start the game
function startGame() {
    if (!isAlive && !hasBlackJack) {  // Only allow start if not alive and no Blackjack
        isAlive = true;
        let firstCard = getRandomNum();
        let secondCard = getRandomNum();
        cards = [firstCard, secondCard];
        sum = firstCard + secondCard;
        console.log(cards);
        renderGame(); 
    }
}

function getRandomNum() {
    let randomNum = Math.floor( Math.random() * 13) + 1;
    if(randomNum > 10 ){
        return 10
    }
    else if(randomNum === 1){
        return 11
    }
    else{
       return randomNum
    }
}

// Rendering cards and sum after evaluating conditions
function renderGame() {
    cardEl.textContent = "Cards: ";
    // Looping through the cards array to display each one
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've gotten Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    
    textEl.textContent = message;
}

function newCard() {
    // When sum has not exceeded 21 and Blackjack hasn't been achieved
    if (isAlive && !hasBlackJack) {
        let newCard = getRandomNum();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}

function resetBtn() {
    textEl.textContent = "Want to play a round?";
    cards = [];
    sum = "";
    hasBlackJack = false;
    isAlive = false;
    renderGame();
}