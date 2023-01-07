const gameState = {
  gameStarted: false,
  initialRoll: null,
  movesLeft: null,
  person: null,
  textMessage: null,
  ambientTheme: new Audio("./audio/theme.wav"),
  intervention: new Audio("./audio/intervention.wav"),
  sax: new Audio("./audio/sax.wav"),
  health: 100,
  gains: 75,
};

export default gameState;
