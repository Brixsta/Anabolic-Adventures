import gameState from "./gameState.js";

const playRandomVoiceLine = () => {
  const shortVoiceLines = [
    new Audio("./audio/scooby.wav"),
    new Audio("./audio/yes.wav"),
    new Audio("./audio/jackson.wav"),
    new Audio("./audio/playball.wav"),
    new Audio("./audio/trash.wav"),
    new Audio("./audio/cringe.wav"),
    new Audio("./audio/brain.wav"),
    new Audio("./audio/god.wav"),
    new Audio("./audio/nerd.wav"),
  ];
  const mediumVoiceLines = [
    new Audio("./audio/burger.wav"),
    new Audio("./audio/breakfast.wav"),
    new Audio("./audio/shut.wav"),
    new Audio("./audio/dont.wav"),
    new Audio("./audio/outside.wav"),
    new Audio("./audio/thatguy.wav"),
    new Audio("./audio/dead.wav"),
    new Audio("./audio/surprised.wav"),
    new Audio("./audio/chance.wav"),
    new Audio("./audio/shorts.wav"),
  ];
  const longVoiceLines = [
    new Audio("./audio/gore.wav"),
    new Audio("./audio/fish.wav"),
    new Audio("./audio/republic.wav"),
    new Audio("./audio/relations.wav"),
    new Audio("./audio/diabetes.wav"),
    new Audio("./audio/lottery.wav"),
    new Audio("./audio/mcmahon.wav"),
  ];

  // determine which duration of voice line to use
  if (gameState.initialRoll <= 3) {
    const randomNum = Math.floor(Math.random() * shortVoiceLines.length);
    shortVoiceLines[randomNum].play();
  } else if (gameState.initialRoll > 3 && gameState.initialRoll < 8) {
    const randomNum = Math.floor(Math.random() * mediumVoiceLines.length);
    mediumVoiceLines[randomNum].play();
  } else {
    const randomNum = Math.floor(Math.random() * longVoiceLines.length);
    longVoiceLines[randomNum].play();
  }
};

export default playRandomVoiceLine;
