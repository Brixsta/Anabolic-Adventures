import rollDice from "./rollDice.js";

const createCounterTop = () => {
  const counterTop = document.createElement("div");
  counterTop.classList.add("counter-top");
  const board = document.querySelector(".board");
  board.appendChild(counterTop);

  // create counter top phone
  const phone = document.createElement("button");
  phone.classList.add("phone");
  board.appendChild(phone);

  // create counter top journal
  const journal = document.createElement("div");
  journal.classList.add("journal");
  counterTop.appendChild(journal);

  // create counter top dice w/ button container
  const diceButton = document.createElement("button");
  diceButton.classList.add("dice-button");
  counterTop.appendChild(diceButton);

  const diceOne = document.createElement("div");
  diceOne.classList.add("dice-one");
  diceButton.appendChild(diceOne);

  const diceTwo = document.createElement("div");
  diceTwo.classList.add("dice-two");
  diceButton.appendChild(diceTwo);

  diceButton.addEventListener("click", () => {
    rollDice();
  });
};

export default createCounterTop;
