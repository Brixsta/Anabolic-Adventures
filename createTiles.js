const createTiles = () => {
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
};

export default createTiles;
