import gameState from "./gameState.js";
import restoreTransparentCounterTopItems from "./restoreTransparentCounterTopItems.js";
import createPhoneTextMessage from "./createPhoneTextMessage.js";
import createCashAppMessage from "./createCashAppMessage.js";

const handlePhoneClick = () => {
  const alertMessageContainer = document.querySelector(
    ".alert-message-container"
  );
  const phone = document.querySelector(".phone");
  const activeTile = document.querySelector(".active-tile");

  // Arnold Hires Your Mom Tile event
  if (parseInt(activeTile.id) === 5) {
    phone.removeEventListener("click", handlePhoneClick);
    alertMessageContainer.remove();
    restoreTransparentCounterTopItems();
    createCashAppMessage();
  } else {
    alertMessageContainer.remove();
    restoreTransparentCounterTopItems();
    createPhoneTextMessage(gameState.person, gameState.textMessage);
    phone.removeEventListener("click", handlePhoneClick);
  }
};

export default handlePhoneClick;
