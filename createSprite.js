const createSprite = () => {
  const sprite = document.createElement("div");
  sprite.classList.add("sprite");
  const board = document.querySelector(".board");
  board.appendChild(sprite);

  sprite.style.bottom = "70px";
  sprite.style.right = "55px";
};

export default createSprite;
