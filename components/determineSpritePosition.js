const determineSpritePosition = () => {
  const sprite = document.querySelector(".sprite");
  const bottom = sprite.style.bottom;
  const right = sprite.style.right;
  return [right, bottom];
};

export default determineSpritePosition;
