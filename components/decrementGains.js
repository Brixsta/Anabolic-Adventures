import gameState from "./gameState.js";

const decrementGains = (amt) => {
  gameState.gains -= amt;
  const gainsBar = document.querySelector(".gains-bar");
  gainsBar.style.height = gameState.gains + "%";
};

export default decrementGains;
