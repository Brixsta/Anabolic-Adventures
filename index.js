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
    tiles[0].style.backgroundImage = "url('images/jordan.png')";

    // Greg Doucette tile
    tiles[3].style.backgroundImage = "url('images/greg.png')";

    // Sarms Goblin tile
    tiles[4].style.backgroundImage = "url('images/goblin.png')";

    // Sarms Goblin tile
    tiles[5].style.backgroundImage = "url('images/arnold.png')";

    // Larry Wheels tile
    tiles[9].style.backgroundImage = "url('images/larry.png')";

    // Hulkster's blessing tile
    tiles[19].style.backgroundImage = "url('images/hulk.png')";

    // Tommy Tren title
    tiles[20].style.backgroundImage = "url('images/tren.png')";

    // AthleanX title
    tiles[21].style.backgroundImage = "url('images/athlean.png')";

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
        i !== 2 &&
        i !== 6 &&
        i !== 7 &&
        i !== 8 &&
        i !== 10 &&
        i !== 11 &&
        i !== 12 &&
        i !== 13 &&
        i !== 14 &&
        i !== 16 &&
        i !== 17 &&
        i !== 18 &&
        i !== 22
      ) {
        tiles[i].appendChild(tileTitle);

        // apply text to fake natty tile
        if (tiles[0].children[0]) {
          tiles[0].children[0].innerHTML = "JP Gives Birth";
        }

        // apply text to fake natty tile
        if (tiles[1].children[0]) {
          tiles[1].children[0].innerHTML = "Labeled Fake Natty";
        }

        // apply text to greg doucette speaks
        if (tiles[3].children[0]) {
          tiles[3].children[0].innerHTML = "Greg Doucette Speaks";
        }

        // apply text to sarms goblin
        if (tiles[4].children[0]) {
          tiles[4].children[0].innerHTML = "SARMS Goblin Attack";
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
          tiles[19].children[0].innerHTML = "Hulkster's Blessing";
        }

        // apply text to basement tile
        if (tiles[20].children[0]) {
          tiles[20].children[0].innerHTML = "Tommy Tren Collab";
        }

        // apply text to basement tile
        if (tiles[21].children[0]) {
          tiles[21].children[0].innerHTML = "Athlean-X Magic Show";
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
  }
}

const game = new Game();
