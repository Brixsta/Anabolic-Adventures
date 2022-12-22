const gameStats = {
  initialRoll: null,
  movesLeft: null,
  ambientTheme: new Audio("Ambient-Theme.wav"),
  gameStarted: false,
};

// collision detection function
const isCollide = (x, y) => {
  return !(
    x.bottom < y.top ||
    x.top > y.bottom ||
    x.right < y.left ||
    x.left > y.right
  );
};

// check if sprite collides with tile
const highlightActiveTile = () => {
  const tiles = document.querySelectorAll(".tile");
  const sprite = document.querySelector(".sprite");

  tiles.forEach((tile) => {
    let tileRect = tile.getBoundingClientRect();
    let spriteRect = sprite.getBoundingClientRect();

    let collisionDetected = isCollide(tileRect, spriteRect);

    if (collisionDetected && gameStats.gameStarted && tile.children[0]) {
      // highlight active tile
      tile.classList.add("active-tile");
      tile.children[0].style.backgroundColor = "#ff19a3";

      gameStats.activeTile = tile;
    } else {
      if (tile.children[0]) {
        tile.classList.remove("active-tile");
        tile.children[0].style.backgroundColor = "black";
      }
    }
  });

  window.requestAnimationFrame(highlightActiveTile);
};

window.requestAnimationFrame(highlightActiveTile);

class Game {
  constructor() {
    this.createBoard();
    this.createTiles();
    this.createTileTitles();
    this.paintTiles();
    this.createPlayer();
    this.createCounterTop();
  }

  createBoard() {
    const wrapper = document.querySelector(".wrapper");
    const board = document.createElement("div");
    board.classList.add("board");
    wrapper.appendChild(board);
  }

  createTiles() {
    for (let i = 0; i < 25; i++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.id = i;
      const board = document.querySelector(".board");
      board.appendChild(tile);

      //   tile.innerHTML = i;

      if (i > 5 && i < 19 && i !== 9 && i !== 10 && i !== 14 && i !== 15) {
        // turn inner tiles white
        tile.style.backgroundColor = "white";

        // remove right-borders of inner tiles
        if (i >= 6 && i !== 8 && i !== 13 && i !== 18) {
          tile.style.borderRight = "none";
        }
        // remove left-borders of inner tiles
        if (i >= 7 && i !== 11 && i !== 16) {
          tile.style.borderLeft = "none";
        }

        // remove top-borders of inner tiles
        if (i >= 11) {
          tile.style.borderTop = "none";
        }
        if (i >= 6 && i < 16) {
          // remove bottom-borders of inner tiles
          tile.style.borderBottom = "none";
        }
      }

      // double the border of the left outtermost tiles
      if (i === 0 || i === 5 || i === 10 || i === 15 || i === 20) {
        tile.style.borderLeft = "2px solid black";
      }

      // double the border of the top outtermost tiles
      if (i >= 0 && i <= 4) {
        tile.style.borderTop = "2px solid black";
      }

      // double the border of the right outtermost tiles
      if (i === 4 || i === 9 || i === 14 || i === 19 || i === 24) {
        tile.style.borderRight = "2px solid black";
      }

      // double the border of the bottom outtermost tiles
      if (i >= 20 && i <= 24) {
        tile.style.borderBottom = "2px solid black";
      }
    }
  }

  paintTiles() {
    const tiles = document.querySelectorAll(".tile");

    // Jordan Peterson tile
    tiles[0].style.backgroundImage = "url('images/goggins.png')";

    // Greg Doucette tile
    tiles[3].style.backgroundImage = "url('images/athlean.png')";

    // Drug Bust tile
    tiles[4].style.backgroundImage = "url('images/drugbust.png')";

    // Arnold Hires Your Mom tile
    tiles[5].style.backgroundImage = "url('images/arnold.png')";

    // Larry Wheels tile
    tiles[9].style.backgroundImage = "url('images/larry.png')";

    // Hulkster's blessing tile
    tiles[19].style.backgroundImage = "url('images/hulk.png')";

    // Tommy Tren title
    tiles[20].style.backgroundImage = "url('images/tren.png')";

    // AthleanX title
    tiles[21].style.backgroundImage = "url('images/greg.png')";

    // Mom's basement tile
    tiles[24].style.backgroundImage = "url('images/basement.png')";

    // Syringe tile
    tiles[2].style.backgroundImage = "url('images/syringe.png')";
    tiles[10].style.backgroundImage = "url('images/syringe.png')";
    tiles[14].style.backgroundImage = "url('images/syringe.png')";
    tiles[22].style.backgroundImage = "url('images/syringe.png')";

    // Pre-Workout tile
    tiles[23].style.backgroundImage = "url('images/preworkout.png')";

    //Joe Rogan tile
    tiles[15].style.backgroundImage = "url('images/rogan.png')";

    // Fake Natty tile
    tiles[1].style.backgroundImage = "url('images/fake-natty.png')";
  }

  createTileTitles() {
    for (let i = 0; i < 25; i++) {
      const tiles = document.querySelectorAll(".tile");
      const tileTitle = document.createElement("div");
      tileTitle.classList.add("tile-title");

      // only append titles where necessary
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

        // apply text to fake natty tile
        if (tiles[1].children[0]) {
          tiles[1].children[0].innerHTML = "Labeled Fake Natty";
        }

        // apply text to greg doucette speaks
        if (tiles[3].children[0]) {
          tiles[3].children[0].innerHTML = "Athlean-X Magic Show";
        }

        // apply text to sarms goblin
        if (tiles[4].children[0]) {
          tiles[4].children[0].innerHTML = "Drug Bust";
        }

        // apply text to ex gf deletes insta
        if (tiles[5].children[0]) {
          tiles[5].children[0].innerHTML = "Arnold Hires Your Mom";
        }

        // apply text to ex gf deletes insta
        if (tiles[9].children[0]) {
          tiles[9].children[0].innerHTML = "Train w/ Larry Wheels";
        }

        // apply text to joe rogaine tile
        if (tiles[15].children[0]) {
          tiles[15].children[0].innerHTML = "DMT w/ Joe Rogan";
        }

        // apply text to toad tile
        if (tiles[19].children[0]) {
          tiles[19].children[0].innerHTML = "Hulkster's Proposal";
        }

        // apply text to basement tile
        if (tiles[20].children[0]) {
          tiles[20].children[0].innerHTML = "Tommy Tren Collab";
        }

        // apply text to basement tile
        if (tiles[21].children[0]) {
          tiles[21].children[0].innerHTML = "Greg Doucette Speaks";
        }

        // apply text to preworkout tile
        if (tiles[23].children[0]) {
          tiles[23].children[0].innerHTML = "Low on Pre-Workout";
        }

        // apply text to basement tile
        if (tiles[24].children[0]) {
          tiles[24].children[0].innerHTML = "Mom's Basement";
        }
      }
    }
  }

  createPlayer() {
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

    const phone = document.createElement("button");
    phone.classList.add("phone");
    board.appendChild(phone);

    const journal = document.createElement("div");
    journal.classList.add("journal");
    counterTop.appendChild(journal);

    const diceContainer = document.createElement("button");
    diceContainer.classList.add("dice-container");
    counterTop.appendChild(diceContainer);

    const diceOne = document.createElement("div");
    diceOne.classList.add("dice-one");
    diceContainer.appendChild(diceOne);

    const diceTwo = document.createElement("div");
    diceTwo.classList.add("dice-two");
    diceContainer.appendChild(diceTwo);

    diceContainer.addEventListener("click", () => {
      this.rollDice();
    });
  }

  rollDice() {
    gameStats.ambientTheme.play();
    gameStats.ambientTheme.loop = true;
    gameStats.gameStarted = true;

    const diceSounds = [
      new Audio("./Dice-Sound-One.wav"),
      new Audio("./Dice-Sound-Two.wav"),
      new Audio("./Dice-Sound-Three.wav"),
    ];
    diceSounds[Math.floor(Math.random() * 3)].play();
    const diceContainer = document.querySelector(".dice-container");
    const firstRandomNumber = Math.floor(Math.random() * 6) + 1;
    const SecondRandomNumber = Math.floor(Math.random() * 6) + 1;

    gameStats.movesLeft = firstRandomNumber + SecondRandomNumber;
    gameStats.initialRoll = firstRandomNumber + SecondRandomNumber;

    // sound effect based on roll
    if (gameStats.initialRoll === 2) {
      const ohMyGod = new Audio("Oh-My-God.wav");
      ohMyGod.play();
    } else if (gameStats.initialRoll === 5) {
      const cringe = new Audio("Cringe.wav");
      cringe.play();
    } else if (gameStats.initialRoll === 6) {
      const trash = new Audio("Trash.wav");
      trash.play();
    } else if (gameStats.initialRoll === 7) {
      const dont = new Audio("Dont.wav");
      dont.play();
    } else if (gameStats.initialRoll === 8) {
      const Scooby = new Audio("Scooby.wav");
      Scooby.play();
    }

    diceContainer.disabled = true;

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
    if (gameStats.movesLeft === 0) {
      const diceContainer = document.querySelector(".dice-container");
      diceContainer.disabled = false;
      return;
    }

    const sprite = document.querySelector(".sprite");

    let spriteX = sprite.style.right;
    let spriteY = sprite.style.bottom;

    // check if the player has moves left
    if (gameStats.movesLeft > 0) {
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
    gameStats.movesLeft -= 1;
    setTimeout(() => {
      this.moveSprite();
    }, 800);

    // play tile hover sound
    const tileHoverSound = new Audio("Tile-Sound.mp3");
    tileHoverSound.volume = 0.03;
    tileHoverSound.play();
  }
}

const game = new Game();
