import gameState from "./gameState.js";

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

    if (collisionDetected && gameState.gameStarted && tile.children[0]) {
      // highlight active tile
      tile.classList.add("active-tile");
      tile.children[0].style.backgroundColor = "#ff19a3";

      gameState.activeTile = tile;
    } else {
      if (tile.children[0]) {
        tile.classList.remove("active-tile");
        tile.children[0].style.backgroundColor = "black";
      }
    }
  });

  window.requestAnimationFrame(highlightActiveTile);
};

export default highlightActiveTile;
