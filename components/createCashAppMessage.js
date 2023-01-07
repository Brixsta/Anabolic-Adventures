import handleCashAppAcceptButtonClick from "./handleCashAppAcceptButtonClick.js";

const createCashAppMessage = () => {
  const board = document.querySelector(".board");
  const cashAppMessageContainer = document.createElement("div");
  cashAppMessageContainer.classList.add("cash-app-message-container");
  board.append(cashAppMessageContainer);

  //create phone text message header
  const cashAppMessageHeader = document.createElement("div");
  cashAppMessageHeader.classList.add("cash-app-message-header");
  cashAppMessageContainer.appendChild(cashAppMessageHeader);

  //create phone text message metrics bar
  const phoneTextMessageMetrics = document.createElement("div");
  phoneTextMessageMetrics.classList.add("phone-text-message-metrics");
  cashAppMessageHeader.appendChild(phoneTextMessageMetrics);

  // create phone text message time
  const currentdate = new Date();
  const phoneTextMessageTime = document.createElement("div");
  phoneTextMessageTime.classList.add("phone-text-message-time");
  phoneTextMessageMetrics.appendChild(phoneTextMessageTime);
  phoneTextMessageTime.innerText =
    currentdate.getHours() + ":" + currentdate.getMinutes();

  //create wifi icon
  const phoneTextMessageWifi = document.createElement("div");
  phoneTextMessageWifi.classList.add("phone-text-message-wifi");
  phoneTextMessageMetrics.appendChild(phoneTextMessageWifi);

  // create lte icon
  const phoneTextMessageLTE = document.createElement("div");
  phoneTextMessageLTE.classList.add("phone-text-message-lte");
  phoneTextMessageMetrics.appendChild(phoneTextMessageLTE);

  // create signal strength icon
  const phoneTextMessageSignal = document.createElement("div");
  phoneTextMessageSignal.classList.add("phone-text-message-signal");
  phoneTextMessageMetrics.appendChild(phoneTextMessageSignal);

  // create recharging icon
  const phoneTextMessageRecharge = document.createElement("div");
  phoneTextMessageRecharge.classList.add("phone-text-message-recharge");
  phoneTextMessageMetrics.appendChild(phoneTextMessageRecharge);

  // create container for x-icon and horizontal dots
  const cashAppOptions = document.createElement("div");
  cashAppOptions.classList.add("cash-app-options");
  cashAppMessageContainer.appendChild(cashAppOptions);

  // create x icon
  const cashAppXIcon = document.createElement("div");
  cashAppXIcon.classList.add("cash-app-x-icon");
  cashAppOptions.appendChild(cashAppXIcon);

  // create horizontal dots
  const cashAppHorizontalDots = document.createElement("div");
  cashAppHorizontalDots.classList.add("cash-app-horizontal-dots");
  cashAppOptions.appendChild(cashAppHorizontalDots);

  // create content box which the enlarge animation is applied to
  const cashAppMessageContent = document.createElement("div");
  cashAppMessageContent.classList.add("cash-app-message-content");
  cashAppMessageContainer.appendChild(cashAppMessageContent);
  cashAppMessageContent.style.transform = "scale(0,0)";
  cashAppMessageContent.style.opacity = 0;

  // create cash app avatar
  const cashAppAvatar = document.createElement("div");
  cashAppAvatar.classList.add("cash-app-avatar");
  cashAppMessageContent.appendChild(cashAppAvatar);

  // create cash app contact name
  const cashAppContactName = document.createElement("span");
  cashAppContactName.classList.add("cash-app-contact-name");
  cashAppMessageContent.appendChild(cashAppContactName);
  cashAppContactName.innerText = "Arnold Schwarzenegger";

  // create cash app payment contact name
  const cashAppPaymentContactName = document.createElement("span");
  cashAppPaymentContactName.classList.add("cash-app-payment-contact-name");
  cashAppMessageContent.appendChild(cashAppPaymentContactName);
  cashAppPaymentContactName.innerText = "Payment from $FaithfulArnie69";

  // create cash app payment amount
  const cashAppPaymentAmount = document.createElement("span");
  cashAppPaymentAmount.classList.add("cash-app-payment-amount");
  cashAppMessageContent.appendChild(cashAppPaymentAmount);
  cashAppPaymentAmount.innerText = "$5000.00";

  // create cash app payment message
  const cashAppPaymentMessage = document.createElement("span");
  cashAppPaymentMessage.classList.add("cash-app-payment-message");
  cashAppMessageContent.appendChild(cashAppPaymentMessage);
  cashAppPaymentMessage.innerHTML = `I'm so Sorry..`;

  // create cash app accept button
  const cashAppAcceptButton = document.createElement("button");
  cashAppAcceptButton.classList.add("cash-app-accept-button");
  cashAppMessageContent.appendChild(cashAppAcceptButton);
  cashAppAcceptButton.innerHTML = "WTF Arnie";
  cashAppAcceptButton.style.opacity = 0;
  cashAppAcceptButton.disabled = true;

  // create cash app message sound
  const pop = new Audio("./audio/pop.wav");

  setTimeout(() => {
    pop.play();
  }, 700);

  // disable text reply button until it is visible
  setTimeout(() => {
    cashAppAcceptButton.style.opacity = 1;
    cashAppAcceptButton.disabled = false;
  }, 3000);

  cashAppAcceptButton.addEventListener("click", handleCashAppAcceptButtonClick);
};

export default createCashAppMessage;
