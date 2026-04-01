let player = {
  name: "Kamy",
  chips: 0,
};
let cardsArray = [];
let sum = 0;
let hasBlackJack;
let isAlive;
let message = "";

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) return 11;
  else if (randomNumber > 9) return 10;
  else return randomNumber;
}

function startGame() {
  if (sum === 0) {
    cardsArray = [getRandomCard(), getRandomCard()];
    sum = cardsArray[0] + cardsArray[1];

    hasBlackJack = false;
    isAlive = true;

    message = "";
    play();
  }
}

function play() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    player.chips = sum;
    document.getElementById("player-el").textContent =
      player.name + " : $" + player.chips;
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  document.getElementById("message-el").textContent = message;
  document.getElementById("sum-el").textContent = "Sum : " + sum;
  document.getElementById("cards-el").textContent =
    "Cards : " + cardsArray.join(" ");
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let newCard = getRandomCard();
    cardsArray.push(newCard);
    sum += newCard;
    play();
  }
}

/* 3h */
