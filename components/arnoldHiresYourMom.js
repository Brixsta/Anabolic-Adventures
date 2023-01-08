import gameState from "./gameState.js";
import vibratePhone from "./vibratePhone.js";
import allTransparentButPhone from "./allTransparentButPhone.js";
import createAlertMessage from "./createAlertMessage.js";
import handlePhoneClick from "./handlePhoneClick.js";

const arnoldHiresYourMom = () => {
  const phone = document.querySelector(".phone");
  gameState.ambientTheme.pause();
  gameState.sax.play();
  vibratePhone();
  allTransparentButPhone();
  createAlertMessage("Check Your Phone");
  phone.addEventListener("click", handlePhoneClick);
};

export default arnoldHiresYourMom;
