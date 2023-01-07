import gameState from "./gameState.js";
import playRandomVoiceLine from "./playRandomVoiceLine.js";
import moveSprite from "./moveSprite.js";

const rollDice = () => {
  gameState.ambientTheme.play();
  gameState.ambientTheme.loop = true;
  gameState.gameStarted = true;

  const rollDiceSound = new Audio("./audio/dice.wav");
  rollDiceSound.play();

  const diceButton = document.querySelector(".dice-button");
  const firstRandomNumber = Math.floor(Math.random() * 6) + 1;
  const SecondRandomNumber = Math.floor(Math.random() * 6) + 1;

  // gameState.movesLeft = firstRandomNumber + SecondRandomNumber;
  // gameState.initialRoll = firstRandomNumber + SecondRandomNumber;

  gameState.movesLeft = 1;
  gameState.initialRoll = 1;

  playRandomVoiceLine();

  diceButton.disabled = true;

  const diceOne = document.querySelector(".dice-one");
  const diceTwo = document.querySelector(".dice-two");

  const diceShakeOne = [
    { transform: `translate(0px, ${Math.floor(Math.random() * 15) + 5}px)` },
    { transform: `translate(${Math.floor(Math.random() * 8) + 5}px, 0px)` },
    {
      transform: `translate(0px, ${Math.floor(Math.random() * -15) + -5}px)`,
    },
    {
      transform: `translate(${Math.floor(Math.random() * -19) + -5}px, 0px)`,
    },
    { transform: `translate(0px, ${Math.floor(Math.random() * 11) + 5}px)` },
  ];

  const diceShakeTwo = [
    { transform: `translate(0px, ${Math.floor(Math.random() * 15) + 5}px)` },
    { transform: `translate(${Math.floor(Math.random() * 13) + 5}px, 0px)` },
    {
      transform: `translate(0px, ${Math.floor(Math.random() * -17) + -5}px)`,
    },
    {
      transform: `translate(${Math.floor(Math.random() * -15) + -5}px, 0px)`,
    },
    { transform: `translate(0px, ${Math.floor(Math.random() * 19) + 5}px)` },
  ];

  const diceTiming = {
    duration: 200,
    iterations: 2,
  };

  diceOne.animate(diceShakeOne, diceTiming);
  diceTwo.animate(diceShakeTwo, diceTiming);

  setTimeout(() => {
    diceOne.style.backgroundImage = `url(images/dice-${firstRandomNumber}.png)`;
    diceTwo.style.backgroundImage = `url(images/dice-${SecondRandomNumber}.png)`;

    setTimeout(() => {
      moveSprite();
    }, 300);
  }, 400);
};

export default rollDice;
