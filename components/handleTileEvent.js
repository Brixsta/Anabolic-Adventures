import gameState from "./gameState.js";
import vibratePhone from "./vibratePhone.js";
import allTransparentButPhone from "./allTransparentButPhone.js";
import createAlertMessage from "./createAlertMessage.js";
import handlePhoneClick from "./handlePhoneClick.js";

const handleTileEvent = () => {
  const diceButton = document.querySelector(".dice-button");
  diceButton.disabled = false;
  const phone = document.querySelector(".phone");
  const activeTile = document.querySelector(".active-tile");

  // Pre-Workout tile event
  if (parseInt(activeTile.id) === 23) {
    const intervention = new Audio("./audio/intervention.wav");
    intervention.currentTime = 0;
    const textMessage = `I'm worried about you. I talked with God and he said you were sufferring from NO-XPLODE dependency. I know it feels like all hope is lost. Call me immediately before the pre-workout demons ravage your sinful soul. Jesus loves you!`;
    gameState.textMessage = textMessage;
    gameState.person = "Creepy Pastor Tom";
    gameState.ambientTheme.pause();
    intervention.play();
    vibratePhone();
    allTransparentButPhone();
    createAlertMessage("Check Your Phone");

    phone.addEventListener("click", handlePhoneClick);
  }
  // Arnold Hires Your Mom tile event
  if (parseInt(activeTile.id) === 5) {
    gameState.ambientTheme.pause();
    const sax = new Audio("./audio/sax.wav");
    sax.currentTime = 0;
    sax.play();
    createAlertMessage("Check Your Phone");
    phone.addEventListener("click", handlePhoneClick);
  }
};

export default handleTileEvent;
