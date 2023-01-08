import determineSpritePosition from "./determineSpritePosition.js";
import gameState from "./gameState.js";

const determineLastTileId = () => {
  const spritePosition = determineSpritePosition();
  const right = spritePosition[0];
  const bottom = spritePosition[1];
  if (right === "55px" && bottom === "70px") {
    gameState.lastTileId = 24;
  } else if (right === "215px" && bottom === "70px") {
    gameState.lastTileId = 23;
  } else if (right === "375px" && bottom === "70px") {
    gameState.lastTileId = 22;
  } else if (right === "535px" && bottom === "70px") {
    gameState.lastTileId = 21;
  } else if (right === "695px" && bottom === "70px") {
    gameState.lastTileId = 20;
  } else if (right === "695px" && bottom === "230px") {
    gameState.lastTileId = 15;
  } else if (right === "695px" && bottom === "390px") {
    gameState.lastTileId = 10;
  } else if (right === "695px" && bottom === "550px") {
    gameState.lastTileId = 5;
  } else if (right === "695px" && bottom === "710px") {
    gameState.lastTileId = 0;
  } else if (right === "535px" && bottom === "710px") {
    gameState.lastTileId = 1;
  } else if (right === "375px" && bottom === "710px") {
    gameState.lastTileId = 2;
  } else if (right === "215" && bottom === "710px") {
    gameState.lastTileId = 3;
  } else if (right === "55px" && bottom === "710px") {
    gameState.lastTileId = 4;
  } else if (right === "55px" && bottom === "550px") {
    gameState.lastTileId = 9;
  } else if (right === "55px" && bottom === "390px") {
    gameState.lastTileId = 14;
  } else if (right === "55px" && bottom === "230px") {
    gameState.lastTileId = 19;
  }
};

export default determineLastTileId;
