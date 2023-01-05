const gameState = {
  gameStarted: false,
  initialRoll: null,
  movesLeft: null,
  person: null,
  textMessage: null,
  ambientTheme: new Audio("./audio/theme.wav"),
  health: 100,
  gains: 100,
};

export default gameState;
