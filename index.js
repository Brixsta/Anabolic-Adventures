import createBoard from "./components/createBoard.js";
import createTiles from "./components/createTiles.js";
import createTileTitles from "./components/createTileTitles.js";
import paintTiles from "./components/paintTiles.js";
import createSprite from "./components/createSprite.js";
import createHealthBar from "./components/createHealthBar.js";
import createGainsBar from "./components/createGainsBar.js";
import highlightActiveTile from "./components/highlightActiveTile.js";
import createCounterTop from "./components/createCounterTop.js";

window.requestAnimationFrame(highlightActiveTile);

// create layout of the game
createBoard();
createTiles();
createTileTitles();
paintTiles();
createSprite();
createHealthBar();
createGainsBar();
createCounterTop();
