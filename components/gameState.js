const gameState = {
  gameStarted: false,
  initialRoll: null,
  movesLeft: null,
  lastTileId: null,
  person: null,
  textMessage: null,
  ambientTheme: new Audio("./audio/theme.wav"),
  intervention: new Audio("./audio/intervention.wav"),
  sax: new Audio("./audio/sax.wav"),
  jefferson: new Audio("./audio/jefferson.wav"),
  health: 100,
  gains: 75,
};

export default gameState;
