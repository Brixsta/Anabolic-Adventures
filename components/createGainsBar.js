import gameState from "./gameState.js";

const createGainsBar = () => {
  const gainsBar = document.createElement("div");
  gainsBar.classList.add("gains-bar");
  const board = document.querySelector(".board");
  board.appendChild(gainsBar);

  // move gains level depending on game state
  const currentGainsLevel = gameState.gains;
  gainsBar.style.height = currentGainsLevel + "%";
};

export default createGainsBar;
