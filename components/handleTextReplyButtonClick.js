import gameState from "./gameState.js";
import decrementGains from "./decrementGains.js";

const handleTextReplyButtonClick = () => {
  const diceButton = document.querySelector(".dice-button");
  diceButton.disabled = false;
  const textReplyButton = document.querySelector(".text-reply-button");
  const phoneTextMessageContainer = document.querySelector(
    ".phone-text-message-container"
  );
  phoneTextMessageContainer.remove();
  gameState.intervention.pause();
  gameState.intervention.currentTime = 0;
  gameState.ambientTheme.play();
  if (gameState.person === "Creepy Pastor Tom") {
    decrementGains(20);
  }
  textReplyButton.removeEventListener("click", handleTextReplyButtonClick);
};

export default handleTextReplyButtonClick;
