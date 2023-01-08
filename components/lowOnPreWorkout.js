import gameState from "./gameState.js";
import vibratePhone from "./vibratePhone.js";
import allTransparentButPhone from "./allTransparentButPhone.js";
import createAlertMessage from "./createAlertMessage.js";
import handlePhoneClick from "./handlePhoneClick.js";

const lowOnPreWorkout = () => {
  const phone = document.querySelector(".phone");
  gameState.intervention.currentTime = 0;
  const textMessage = `I'm worried about you. I talked with God and he said you were sufferring from NO-XPLODE dependency. I know it feels like all hope is lost. Call me immediately before the pre-workout demons ravage your sinful soul. Jesus loves you!`;
  gameState.textMessage = textMessage;
  gameState.person = "Creepy Pastor Tom";
  gameState.ambientTheme.pause();
  gameState.intervention.play();
  vibratePhone();
  allTransparentButPhone();
  createAlertMessage("Check Your Phone");
  phone.addEventListener("click", handlePhoneClick);
};

export default lowOnPreWorkout;
