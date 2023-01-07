import incrementGains from "./incrementGains.js";
import gameState from "./gameState.js";

const handleCashAppAcceptButtonClick = () => {
  const cashAppAcceptButton = document.querySelector(".cash-app-accept-button");
  cashAppAcceptButton.removeEventListener(
    "click",
    handleCashAppAcceptButtonClick
  );
  incrementGains(10);

  const diceButton = document.querySelector(".dice-button");
  diceButton.disabled = false;
  const cashAppMessageContainer = document.querySelector(
    ".cash-app-message-container"
  );
  cashAppMessageContainer.remove();
  gameState.ambientTheme.play();
  gameState.sax.pause();
  gameState.sax.currentTime = 0;
};

export default handleCashAppAcceptButtonClick;
