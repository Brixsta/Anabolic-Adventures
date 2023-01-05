import gameState from "./gameState.js";
import restoreTransparentCounterTopItems from "./restoreTransparentCounterTopItems.js";
import createPhoneTextMessage from "./createPhoneTextMessage.js";

const handlePhoneClick = () => {
  const phone = document.querySelector(".phone");
  const alertMessageContainer = document.querySelector(
    ".alert-message-container"
  );
  alertMessageContainer.remove();
  restoreTransparentCounterTopItems();
  createPhoneTextMessage(gameState.person, gameState.textMessage);
  phone.removeEventListener("click", handlePhoneClick);
};

export default handlePhoneClick;
