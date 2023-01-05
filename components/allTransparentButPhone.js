const allTransparentButPhone = () => {
  const counterTop = document.querySelector(".counter-top");
  counterTop.style.setProperty("--fadeBackground", ".2");
  const journal = document.querySelector(".journal");
  journal.style.opacity = 0.2;
  const diceOne = document.querySelector(".dice-one");
  const diceTwo = document.querySelector(".dice-two");
  diceOne.style.opacity = 0;
  diceTwo.style.opacity = 0;
};

export default allTransparentButPhone;
