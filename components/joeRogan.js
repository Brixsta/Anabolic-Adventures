import gameState from "./gameState.js";
import allTransparentButJournal from "./allTransparentButJournal.js";
import createAlertMessage from "./createAlertMessage.js";
import createJournalEntry from "./createJournalEntry.js";

const joeRogan = () => {
  const journal = document.querySelector(".journal");
  const diceButton = document.querySelector(".dice-button");
  journal.disabled = false;
  gameState.ambientTheme.pause();
  gameState.jefferson.play();
  allTransparentButJournal();
  createAlertMessage("Check Your Journal");
  journal.addEventListener("click", createJournalEntry);
  diceButton.remove();
};

export default joeRogan;
