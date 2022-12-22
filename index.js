const gameStats = {
  movesLeft: null,
};

class Player {
  constructor() {
    this.x = 55;
    this.y = 70;
    const sprite = document.createElement("div");
    sprite.classList.add("sprite");
    const board = document.querySelector(".board");
    board.appendChild(sprite);

    sprite.style.bottom = this.y + "px";
    sprite.style.right = this.x + "px";
  }
}

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
    const player = new Player();
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
    console.log(gameStats.movesLeft);

    // diceContainer.disabled = true;

    const diceOne = document.querySelector(".dice-one");
    const diceTwo = document.querySelector(".dice-two");

    const diceShakeOne = [
      { transform: `translate(0px, ${Math.floor(Math.random() * 15) + 5}px)` },
      { transform: `translate(${Math.floor(Math.random() * 15) + 5}px, 0px)` },
      {
        transform: `translate(0px, ${Math.floor(Math.random() * -15) + -5}px)`,
      },
      {
        transform: `translate(${Math.floor(Math.random() * -15) + -5}px, 0px)`,
      },
      { transform: `translate(0px, ${Math.floor(Math.random() * 15) + 5}px)` },
    ];

    const diceShakeTwo = [
      { transform: `translate(0px, ${Math.floor(Math.random() * 15) + 5}px)` },
      { transform: `translate(${Math.floor(Math.random() * 15) + 5}px, 0px)` },
      {
        transform: `translate(0px, ${Math.floor(Math.random() * -15) + -5}px)`,
      },
      {
        transform: `translate(${Math.floor(Math.random() * -15) + -5}px, 0px)`,
      },
      { transform: `translate(0px, ${Math.floor(Math.random() * 15) + 5}px)` },
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
    }, 400);
  }
}

const game = new Game();
