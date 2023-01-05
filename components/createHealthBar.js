import gameState from "./gameState.js";

const createHealthBar = () => {
  const healthBar = document.createElement("div");
  healthBar.classList.add("health-bar");
  const board = document.querySelector(".board");
  board.appendChild(healthBar);

  // move health level depending on game state
  const currentHealthLevel = gameState.health;
  healthBar.style.height = currentHealthLevel + "%";
};

export default createHealthBar;
