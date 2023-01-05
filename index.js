import createAlertMessage from "./createAlertMessage.js";
import createTiles from "./createTiles.js";
import paintTiles from "./paintTiles.js";
import highlightActiveTile from "./highlightActiveTile.js";
import createBoard from "./createBoard.js";

const gameState = {
  gameStarted: false,
  initialRoll: null,
  movesLeft: null,
  person: null,
  textMessage: null,
  ambientTheme: new Audio("./audio/theme.wav"),
  health: 100,
  gains: 100,
};

window.requestAnimationFrame(highlightActiveTile);

class Game {
  constructor() {
    createBoard();
    createTiles();
    this.createTileTitles();
    paintTiles();
    this.createSprite();
    this.createCounterTop();
    this.createHealthBar();
    this.createGainsBar();
  }

  createTileTitles() {
    for (let i = 0; i < 25; i++) {
      const tiles = document.querySelectorAll(".tile");
      const tileTitle = document.createElement("div");
      tileTitle.classList.add("tile-title");

      // only append titles on outter-most tiles
      if (
        i !== 6 &&
        i !== 7 &&
        i !== 8 &&
        i !== 11 &&
        i !== 12 &&
        i !== 13 &&
        i !== 16 &&
        i !== 17 &&
        i !== 18
      ) {
        tiles[i].appendChild(tileTitle);

        // apply text to Synthohl Scenarios
        if (tiles[2].children[0]) {
          tiles[2].children[0].innerHTML = "Steroid Scenarios";
        }
        if (tiles[10].children[0]) {
          tiles[10].children[0].innerHTML = "Steroid Scenarios";
        }
        if (tiles[14].children[0]) {
          tiles[14].children[0].innerHTML = "Steroid Scenarios";
        }
        if (tiles[22].children[0]) {
          tiles[22].children[0].innerHTML = "Steroid Scenarios";
        }

        // apply text Drink Goggin's Sweat tile
        if (tiles[0].children[0]) {
          tiles[0].children[0].innerHTML = "Drink Goggin's Sweat";
        }

        // apply text to Fake Natty tile
        if (tiles[1].children[0]) {
          tiles[1].children[0].innerHTML = "Labeled Fake Natty";
        }

        // apply text to Athlean-X Magic Show tile
        if (tiles[3].children[0]) {
          tiles[3].children[0].innerHTML = "Athlean-X Magic Show";
        }

        // apply text to Dirty Bulk Goes Wrong tile
        if (tiles[4].children[0]) {
          tiles[4].children[0].innerHTML = "Dirty Bulk Goes Wrong";
        }

        // apply text to Arnold Hires Your Mom tile
        if (tiles[5].children[0]) {
          tiles[5].children[0].innerHTML = "Arnold Hires Your Mom";
        }

        // apply text to Train w/ Larry Wheels tile
        if (tiles[9].children[0]) {
          tiles[9].children[0].innerHTML = "Train w/ Larry Wheels";
        }

        // apply text to DMT w/ Joe Rogan tile
        if (tiles[15].children[0]) {
          tiles[15].children[0].innerHTML = "DMT w/ Joe Rogan";
        }

        // apply text to Hulkster's Proposal tile
        if (tiles[19].children[0]) {
          tiles[19].children[0].innerHTML = "Hulkster's Proposal";
        }

        // apply text Tommy Tren Collab tile
        if (tiles[20].children[0]) {
          tiles[20].children[0].innerHTML = "Tommy Tren Collab";
        }

        // apply text to 8 Hour Arms tile
        if (tiles[21].children[0]) {
          tiles[21].children[0].innerHTML = "8 Hour Arms";
        }

        // apply text to Low on Pre-Workout tile
        if (tiles[23].children[0]) {
          tiles[23].children[0].innerHTML = "Low on Pre-Workout";
        }

        // apply text to Mom's Basement tile
        if (tiles[24].children[0]) {
          tiles[24].children[0].innerHTML = "Mom's Basement";
        }
      }
    }
  }

  createSprite() {
    const sprite = document.createElement("div");
    sprite.classList.add("sprite");
    const board = document.querySelector(".board");
    board.appendChild(sprite);

    sprite.style.bottom = "70px";
    sprite.style.right = "55px";
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
    game.createPhoneTextMessage(gameState.person, gameState.textMessage);
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

  createPhoneTextMessage(person, textMessage) {
    const board = document.querySelector(".board");
    const phoneTextMessageContainer = document.createElement("div");
    phoneTextMessageContainer.classList.add("phone-text-message-container");
    board.append(phoneTextMessageContainer);

    //create phone text message header
    const phoneTextMessageHeader = document.createElement("div");
    phoneTextMessageHeader.classList.add("phone-text-message-header");
    phoneTextMessageContainer.appendChild(phoneTextMessageHeader);

    //create phone text message metrics bar
    const phoneTextMessageMetrics = document.createElement("div");
    phoneTextMessageMetrics.classList.add("phone-text-message-metrics");
    phoneTextMessageHeader.appendChild(phoneTextMessageMetrics);

    // create phone text message time
    const phoneTextMessageTime = document.createElement("div");
    phoneTextMessageTime.classList.add("phone-text-message-time");
    phoneTextMessageMetrics.appendChild(phoneTextMessageTime);
    phoneTextMessageTime.innerText = "10:00";

    //create wifi icon
    const phoneTextMessageWifi = document.createElement("div");
    phoneTextMessageWifi.classList.add("phone-text-message-wifi");
    phoneTextMessageMetrics.appendChild(phoneTextMessageWifi);

    // create lte icon
    const phoneTextMessageLTE = document.createElement("div");
    phoneTextMessageLTE.classList.add("phone-text-message-lte");
    phoneTextMessageMetrics.appendChild(phoneTextMessageLTE);

    // create signal strength icon
    const phoneTextMessageSignal = document.createElement("div");
    phoneTextMessageSignal.classList.add("phone-text-message-signal");
    phoneTextMessageMetrics.appendChild(phoneTextMessageSignal);

    // create recharging icon
    const phoneTextMessageRecharge = document.createElement("div");
    phoneTextMessageRecharge.classList.add("phone-text-message-recharge");
    phoneTextMessageMetrics.appendChild(phoneTextMessageRecharge);

    // create contact name container
    const contactNameContainer = document.createElement("div");
    contactNameContainer.classList.add("contact-name-container");
    phoneTextMessageContainer.appendChild(contactNameContainer);

    // create arrow icon
    const contactNameArrow = document.createElement("div");
    contactNameArrow.classList.add("contact-name-arrow");
    contactNameContainer.appendChild(contactNameArrow);

    // create contact name text
    const contactNameText = document.createElement("span");
    contactNameText.classList.add("contact-name-text");
    contactNameContainer.appendChild(contactNameText);
    contactNameText.innerText = person;

    // create contact name video icon
    const contactNameVideo = document.createElement("div");
    contactNameVideo.classList.add("contact-name-video");
    contactNameContainer.appendChild(contactNameVideo);

    // create contact name phone icon
    const contactNamePhone = document.createElement("div");
    contactNamePhone.classList.add("contact-name-phone");
    contactNameContainer.appendChild(contactNamePhone);

    // create contact name dots icon
    const contactNameDots = document.createElement("div");
    contactNameDots.classList.add("contact-name-dots");
    contactNameContainer.appendChild(contactNameDots);

    // create texting watermark
    const textingWatermark = document.createElement("div");
    textingWatermark.classList.add("texting-watermark");
    phoneTextMessageContainer.appendChild(textingWatermark);
    textingWatermark.innerText = `Texting with ${person}`;

    // create text message content container
    const textMessageContentContainer = document.createElement("div");
    textMessageContentContainer.classList.add("text-message-content-container");
    phoneTextMessageContainer.appendChild(textMessageContentContainer);
    textMessageContentContainer.style.transform = "scale(0,0)";
    textMessageContentContainer.style.opacity = 0;

    // create avatar column
    const avatarColumn = document.createElement("div");
    avatarColumn.classList.add("avatar-column");
    textMessageContentContainer.appendChild(avatarColumn);

    // create text message content column
    const textMessageContentColumn = document.createElement("div");
    textMessageContentColumn.classList.add("text-message-content-column");
    textMessageContentContainer.appendChild(textMessageContentColumn);

    // create text message avatar
    const textMessageAvatar = document.createElement("div");
    textMessageAvatar.classList.add("text-message-avatar");
    avatarColumn.appendChild(textMessageAvatar);

    // create message
    const message = document.createElement("div");
    message.classList.add("message");
    textMessageContentColumn.appendChild(message);
    message.innerText = textMessage;

    // create text message sound
    const pop = new Audio("./audio/pop.wav");

    setTimeout(() => {
      pop.play();
    }, 800);

    const textReplyButton = document.createElement("button");
    textReplyButton.classList.add("text-reply-button");
    phoneTextMessageContainer.appendChild(textReplyButton);
    textReplyButton.innerText = "How'd you get my number?";
    textReplyButton.style.opacity = 0;
    textReplyButton.disabled = true;

    // handle textReplyButton Click
    textReplyButton.addEventListener("click", this.handleTextReplyButtonClick);

    // disable text reply button until it is visible
    setTimeout(() => {
      textReplyButton.style.opacity = 1;
      textReplyButton.disabled = false;
    }, 4000);
  }

  handleTextReplyButtonClick() {
    const diceButton = document.querySelector(".dice-button");
    diceButton.disabled = false;
    const textReplyButton = document.querySelector(".text-reply-button");
    const phoneTextMessageContainer = document.querySelector(
      ".phone-text-message-container"
    );
    phoneTextMessageContainer.remove();
    gameState.ambientTheme.play();
    if (gameState.person === "Creepy Pastor Tom") {
      game.decrementGains(20);
    }
    textReplyButton.removeEventListener(
      "click",
      game.handleTextReplyButtonClick
    );
  }

  createHealthBar() {
    const healthBar = document.createElement("div");
    healthBar.classList.add("health-bar");
    const board = document.querySelector(".board");
    board.appendChild(healthBar);

    // move health level depending on game state
    const currentHealthLevel = gameState.health;
    healthBar.style.height = currentHealthLevel + "%";
  }

  createGainsBar() {
    const gainsBar = document.createElement("div");
    gainsBar.classList.add("gains-bar");
    const board = document.querySelector(".board");
    board.appendChild(gainsBar);

    // move gains level depending on game state
    const currentGainsLevel = gameState.gains;
    gainsBar.style.height = currentGainsLevel + "%";
  }

  decrementGains(amt) {
    gameState.gains -= amt;
    const gainsBar = document.querySelector(".gains-bar");
    gainsBar.style.height = gameState.gains + "%";
  }

  decrementHealth(amt) {
    gameState.health -= amt;
    const healthBar = document.querySelector(".health-bar");
    healthBar.style.height = gameState.health + "%";
  }
}

const game = new Game();
export default gameState;
