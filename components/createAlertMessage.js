const createAlertMessage = (message) => {
  const diceButton = document.querySelector(".dice-button");
  diceButton.disabled = true;
  const leftPill = document.createElement("img");
  const rightPill = document.createElement("img");
  leftPill.classList.add("pill");
  rightPill.classList.add("pill");
  leftPill.src = "./images/pill.png";
  rightPill.src = "./images/pill.png";
  rightPill.src = "./images/pill.png";
  const alertMessageContainer = document.createElement("div");
  alertMessageContainer.classList.add("alert-message-container");
  const board = document.querySelector(".board");
  const alertMessageTextContainer = document.createElement("span");
  alertMessageTextContainer.innerText = message;
  alertMessageContainer.appendChild(leftPill);
  alertMessageContainer.appendChild(alertMessageTextContainer);
  alertMessageContainer.appendChild(rightPill);
  board.appendChild(alertMessageContainer);
};

export default createAlertMessage;
