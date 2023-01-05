import gameState from "./gameState.js";
import createBoard from "./createBoard.js";
import createTiles from "./createTiles.js";
import createTileTitles from "./createTileTitles.js";
import paintTiles from "./paintTiles.js";
import createSprite from "./createSprite.js";
import createHealthBar from "./createHealthBar.js";
import createGainsBar from "./createGainsBar.js";
import highlightActiveTile from "./highlightActiveTile.js";
import createAlertMessage from "./createAlertMessage.js";
import createPhoneTextMessage from "./createPhoneTextMessage.js";

window.requestAnimationFrame(highlightActiveTile);

class Game {
  constructor() {
    createBoard();
    createTiles();
    createTileTitles();
    paintTiles();
    createSprite();
    this.createCounterTop();
    createHealthBar();
    createGainsBar();
  }

  createCounterTop() {
    const counterTop = document.createElement("div");
    counterTop.classList.add("counter-top");
    const board = document.querySelector(".board");
    board.appendChild(counterTop);

    // create counter top phone
    const phone = document.createElement("button");
    phone.classList.add("phone");
    board.appendChild(phone);

    // create counter top journal
    const journal = document.createElement("div");
    journal.classList.add("journal");
    counterTop.appendChild(journal);

    // create counter top dice w/ button container
    const diceButton = document.createElement("button");
    diceButton.classList.add("dice-button");
    counterTop.appendChild(diceButton);

    const diceOne = document.createElement("div");
    diceOne.classList.add("dice-one");
    diceButton.appendChild(diceOne);

    const diceTwo = document.createElement("div");
    diceTwo.classList.add("dice-two");
    diceButton.appendChild(diceTwo);

    diceButton.addEventListener("click", () => {
      this.rollDice();
    });
  }

  rollDice() {
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

    this.playRandomVoiceLine();

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
        this.moveSprite();
      }, 300);
    }, 400);
  }

  moveSprite() {
    // re enable dice
    if (gameState.movesLeft === 0) {
      this.handleTileEvent();
      return;
    }

    const sprite = document.querySelector(".sprite");

    let spriteX = sprite.style.right;
    let spriteY = sprite.style.bottom;

    // check if the player has moves left
    if (gameState.movesLeft > 0) {
      // START OF FIRST ROW
      if (spriteX === "55px" && spriteY === "70px") {
        sprite.style.right = "215px";
        spriteX = "215px";
      } else if (spriteX === "215px" && spriteY === "70px") {
        sprite.style.right = "375px";
        spriteX = "375px";
      } else if (spriteX === "375px" && spriteY === "70px") {
        sprite.style.right = "535px";
        spriteX = "535px";
      } else if (spriteX === "535px" && spriteY === "70px") {
        sprite.style.right = "695px";
        spriteX = "695px";
      } else if (spriteX === "695px" && spriteY === "70px") {
        sprite.style.bottom = "230px";
        spriteY = "230px"; // END OF BOTTOM ROW
      } else if (spriteX === "695px" && spriteY === "230px") {
        sprite.style.bottom = "390px";
        spriteY = "390px";
      } else if (spriteX === "695px" && spriteY === "390px") {
        sprite.style.bottom = "550px";
        spriteY = "550px";
      } else if (spriteX === "695px" && spriteY === "550px") {
        sprite.style.bottom = "710px";
        spriteY = "710px"; // END OF LEFT COLUMN
      } else if (spriteX === "695px" && spriteY === "710px") {
        sprite.style.right = "535px";
        spriteX = "535px";
      } else if (spriteX === "535px" && spriteY === "710px") {
        sprite.style.right = "375px";
        spriteX = "375px";
      } else if (spriteX === "375px" && spriteY === "710px") {
        sprite.style.right = "215px";
        spriteX = "215px";
      } else if (spriteX === "215px" && spriteY === "710px") {
        sprite.style.right = "55px";
        spriteX = "55px"; // END OF TOP ROW
      } else if (spriteX === "55px" && spriteY === "710px") {
        sprite.style.bottom = "550px";
        spriteY = "550px";
      } else if (spriteX === "55px" && spriteY === "550px") {
        sprite.style.bottom = "390px";
        spriteY = "390px";
      } else if (spriteX === "55px" && spriteY === "390px") {
        sprite.style.bottom = "230px";
        spriteY = "230px";
      } else if (spriteX === "55px" && spriteY === "230px") {
        sprite.style.bottom = "70px";
        spriteY = "70px";
      }
    }
    gameState.movesLeft -= 1;
    setTimeout(() => {
      this.moveSprite();
    }, 800);

    // play tile hover sound
    const tileHoverSound = new Audio("./audio/tile.mp3");
    tileHoverSound.volume = 0.03;
    tileHoverSound.play();
  }

  playRandomVoiceLine() {
    const shortVoiceLines = [
      new Audio("./audio/scooby.wav"),
      new Audio("./audio/yes.wav"),
      new Audio("./audio/jackson.wav"),
      new Audio("./audio/playball.wav"),
      new Audio("./audio/trash.wav"),
      new Audio("./audio/cringe.wav"),
      new Audio("./audio/brain.wav"),
      new Audio("./audio/god.wav"),
      new Audio("./audio/nerd.wav"),
    ];
    const mediumVoiceLines = [
      new Audio("./audio/burger.wav"),
      new Audio("./audio/breakfast.wav"),
      new Audio("./audio/shut.wav"),
      new Audio("./audio/dont.wav"),
      new Audio("./audio/outside.wav"),
      new Audio("./audio/thatguy.wav"),
      new Audio("./audio/dead.wav"),
      new Audio("./audio/surprised.wav"),
      new Audio("./audio/chance.wav"),
      new Audio("./audio/shorts.wav"),
    ];
    const longVoiceLines = [
      new Audio("./audio/gore.wav"),
      new Audio("./audio/fish.wav"),
      new Audio("./audio/republic.wav"),
      new Audio("./audio/relations.wav"),
      new Audio("./audio/diabetes.wav"),
      new Audio("./audio/lottery.wav"),
      new Audio("./audio/mcmahon.wav"),
    ];

    // determine which duration of voice line to use
    if (gameState.initialRoll <= 3) {
      const randomNum = Math.floor(Math.random() * shortVoiceLines.length);
      shortVoiceLines[randomNum].play();
    } else if (gameState.initialRoll > 3 && gameState.initialRoll < 8) {
      const randomNum = Math.floor(Math.random() * mediumVoiceLines.length);
      mediumVoiceLines[randomNum].play();
    } else {
      const randomNum = Math.floor(Math.random() * longVoiceLines.length);
      longVoiceLines[randomNum].play();
    }
  }

  allTransparentButPhone() {
    const counterTop = document.querySelector(".counter-top");
    counterTop.style.setProperty("--fadeBackground", ".2");
    const journal = document.querySelector(".journal");
    journal.style.opacity = 0.2;
    const diceOne = document.querySelector(".dice-one");
    const diceTwo = document.querySelector(".dice-two");
    diceOne.style.opacity = 0;
    diceTwo.style.opacity = 0;
  }

  vibratePhone() {
    console.log("vibrating phone");
  }

  handleTileEvent() {
    const diceButton = document.querySelector(".dice-button");
    diceButton.disabled = false;
    const phone = document.querySelector(".phone");
    const activeTile = document.querySelector(".active-tile");

    // Pre-Workout tile event
    if (parseInt(activeTile.id) === 23) {
      const intervention = new Audio("./audio/intervention.wav");
      intervention.currentTime = 0;
      const textMessage = `I'm worried about you. I talked with God and he said you were sufferring from NO-XPLODE dependency. I know it feels like all hope is lost. Call me immediately before the pre-workout demons ravage your sinful soul. Jesus loves you!`;
      gameState.textMessage = textMessage;
      gameState.person = "Creepy Pastor Tom";
      gameState.ambientTheme.pause();
      intervention.play();
      this.vibratePhone();
      this.allTransparentButPhone();
      createAlertMessage("Check Your Phone");

      phone.addEventListener("click", this.handlePhoneClick);
    }
  }

  handlePhoneClick() {
    const phone = document.querySelector(".phone");
    const alertMessageContainer = document.querySelector(
      ".alert-message-container"
    );
    alertMessageContainer.remove();
    game.restoreTransparentCounterTopItems();
    createPhoneTextMessage(gameState.person, gameState.textMessage);
    phone.removeEventListener("click", game.handlePhoneClick);
  }

  restoreTransparentCounterTopItems() {
    const diceOne = document.querySelector(".dice-one");
    const diceTwo = document.querySelector(".dice-two");
    const journal = document.querySelector(".journal");
    const counterTop = document.querySelector(".counter-top");
    diceOne.style.opacity = 1;
    diceTwo.style.opacity = 1;
    journal.style.opacity = 1;
    counterTop.style.setProperty("--fadeBackground", "1");
  }

  decrementHealth(amt) {
    gameState.health -= amt;
    const healthBar = document.querySelector(".health-bar");
    healthBar.style.height = gameState.health + "%";
  }
}

const game = new Game();
export default gameState;
