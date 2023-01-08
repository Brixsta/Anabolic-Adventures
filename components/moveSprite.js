import gameState from "./gameState.js";
import handleTileEvent from "./handleTileEvent.js";

const moveSprite = () => {
  // re enable dice
  if (gameState.movesLeft === 0) {
    handleTileEvent();
    return;
  }

  const sprite = document.querySelector(".sprite");
  sprite.classList.add("sprite-moving");
  let spriteX = sprite.style.right;
  let spriteY = sprite.style.bottom;

  // check if the player has moves left
  if (gameState.movesLeft > 0) {
    // START OF FIRST ROW
    if (spriteX === "55px" && spriteY === "70px") {
      sprite.style.right = "215px";
      spriteX = "215px";
    } else if (spriteX === "215px" && spriteY === "70px") {
      sprite.style.right = "375px";
      spriteX = "375px";
    } else if (spriteX === "375px" && spriteY === "70px") {
      sprite.style.right = "535px";
      spriteX = "535px";
    } else if (spriteX === "535px" && spriteY === "70px") {
      sprite.style.right = "695px";
      spriteX = "695px";
    } else if (spriteX === "695px" && spriteY === "70px") {
      sprite.style.bottom = "230px";
      spriteY = "230px"; // END OF BOTTOM ROW
    } else if (spriteX === "695px" && spriteY === "230px") {
      sprite.style.bottom = "390px";
      spriteY = "390px";
    } else if (spriteX === "695px" && spriteY === "390px") {
      sprite.style.bottom = "550px";
      spriteY = "550px";
    } else if (spriteX === "695px" && spriteY === "550px") {
      sprite.style.bottom = "710px";
      spriteY = "710px"; // END OF LEFT COLUMN
    } else if (spriteX === "695px" && spriteY === "710px") {
      sprite.style.right = "535px";
      spriteX = "535px";
    } else if (spriteX === "535px" && spriteY === "710px") {
      sprite.style.right = "375px";
      spriteX = "375px";
    } else if (spriteX === "375px" && spriteY === "710px") {
      sprite.style.right = "215px";
      spriteX = "215px";
    } else if (spriteX === "215px" && spriteY === "710px") {
      sprite.style.right = "55px";
      spriteX = "55px"; // END OF TOP ROW
    } else if (spriteX === "55px" && spriteY === "710px") {
      sprite.style.bottom = "550px";
      spriteY = "550px";
    } else if (spriteX === "55px" && spriteY === "550px") {
      sprite.style.bottom = "390px";
      spriteY = "390px";
    } else if (spriteX === "55px" && spriteY === "390px") {
      sprite.style.bottom = "230px";
      spriteY = "230px";
    } else if (spriteX === "55px" && spriteY === "230px") {
      sprite.style.bottom = "70px";
      spriteY = "70px";
    }
  }
  gameState.movesLeft -= 1;
  setTimeout(() => {
    moveSprite();
  }, 800);

  // play tile hover sound
  const tileHoverSound = new Audio("./audio/tile.mp3");
  tileHoverSound.volume = 0.03;
  tileHoverSound.play();
};

export default moveSprite;
