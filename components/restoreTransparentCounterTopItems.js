const restoreTransparentCounterTopItems = () => {
  const diceOne = document.querySelector(".dice-one");
  const diceTwo = document.querySelector(".dice-two");
  const journal = document.querySelector(".journal");
  const counterTop = document.querySelector(".counter-top");
  diceOne.style.opacity = 1;
  diceTwo.style.opacity = 1;
  journal.style.opacity = 1;
  counterTop.style.setProperty("--fadeBackground", "1");
};

export default restoreTransparentCounterTopItems;
