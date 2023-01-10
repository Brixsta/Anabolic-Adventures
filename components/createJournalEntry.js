const createJournalEntry = () => {
  const journal = document.querySelector(".journal");
  const alertMessageContainer = document.querySelector(
    ".alert-message-container"
  );
  alertMessageContainer.remove();
  journal.removeEventListener("click", createJournalEntry);
  console.log("clicked");

  // create Journal Entry Container
  const board = document.querySelector(".board");
  const journalEntryContainer = document.createElement("div");
  journalEntryContainer.classList.add("journal-entry-container");
  board.appendChild(journalEntryContainer);

  // create Journal Date
  const journalDate = document.createElement("span");
  journalDate.classList.add("journal-date");
  journalEntryContainer.appendChild(journalDate);
  journalDate.innerText = "January 10, 2023";

  // create Journal Entry Title
  const journalEntryTitle = document.createElement("span");
  journalEntryTitle.classList.add("journal-entry-title");
  journalEntryTitle.innerText = "Dude Bro";
  journalEntryContainer.appendChild(journalEntryTitle);

  // create Journal Entry Content
  const journalEntryContent = document.createElement("div");
  journalEntryContent.classList.add("journal-entry-content");
  journalEntryContainer.appendChild(journalEntryContent);
  journalEntryContent.innerText = `Today I hung out with some established comedians and Joe Rogan. They convinced me to see the local shaman. The shaman (Larry from the corner of Main St.) did his magic and opened my third eye. Although now I can't find Larry or my wallet.  `;
};

export default createJournalEntry;
