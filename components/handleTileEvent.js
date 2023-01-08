import gameState from "./gameState.js";
import determineLastTileId from "./determineLastTileId.js";
import arnoldHiresYourMom from "./arnoldHiresYourMom.js";
import lowOnPreWorkout from "./lowOnPreWorkout.js";
import joeRogan from "./JoeRogan.js";

const handleTileEvent = () => {
  determineLastTileId();
  const diceButton = document.querySelector(".dice-button");
  diceButton.disabled = false;

  // Pre-Workout tile event
  if (gameState.lastTileId === 23) {
    lowOnPreWorkout();
  }
  // Arnold Hires Your Mom tile event
  if (gameState.lastTileId === 5) {
    arnoldHiresYourMom();
  }
  // DMT w/ Joe Rogan tile event
  if (gameState.lastTileId === 15) {
    joeRogan();
  }
};

export default handleTileEvent;
