import createBoard from "./components/createBoard.js";
import createTiles from "./components/createTiles.js";
import createTileTitles from "./components/createTileTitles.js";
import paintTiles from "./components/paintTiles.js";
import createSprite from "./components/createSprite.js";
import createHealthBar from "./components/createHealthBar.js";
import createGainsBar from "./components/createGainsBar.js";
import highlightActiveTile from "./components/highlightActiveTile.js";
import createCounterTop from "./components/createCounterTop.js";

// begin infinite loop to check for tile and sprite collision
window.requestAnimationFrame(highlightActiveTile);

// check for the player to alt-tab and move piece accordingly
window.addEventListener("visibilitychange", () => {
  const sprite = document.querySelector(".sprite");
  if (document.visibilityState === "visible") {
    setTimeout(() => {
      sprite.classList.add("sprite-moving");
    }, 10);
  } else {
    sprite.classList.remove("sprite-moving");
  }
});

// create game components
createBoard();
createTiles();
createTileTitles();
paintTiles();
createSprite();
createHealthBar();
createGainsBar();
createCounterTop();
