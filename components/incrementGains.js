import gameState from "./gameState.js";

const incrementGains = (amt) => {
  gameState.gains += amt;
  const gainsBar = document.querySelector(".gains-bar");
  gainsBar.style.height = gameState.gains + "%";
};

export default incrementGains;
