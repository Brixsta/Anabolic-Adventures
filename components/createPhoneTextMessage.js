import handleTextReplyButtonClick from "./handleTextReplyButtonClick.js";

const createPhoneTextMessage = (person, textMessage) => {
  const board = document.querySelector(".board");
  const phoneTextMessageContainer = document.createElement("div");
  phoneTextMessageContainer.classList.add("phone-text-message-container");
  board.append(phoneTextMessageContainer);

  //create phone text message header
  const phoneTextMessageHeader = document.createElement("div");
  phoneTextMessageHeader.classList.add("phone-text-message-header");
  phoneTextMessageContainer.appendChild(phoneTextMessageHeader);

  //create phone text message metrics bar
  const phoneTextMessageMetrics = document.createElement("div");
  phoneTextMessageMetrics.classList.add("phone-text-message-metrics");
  phoneTextMessageHeader.appendChild(phoneTextMessageMetrics);

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

  // create contact name container
  const contactNameContainer = document.createElement("div");
  contactNameContainer.classList.add("contact-name-container");
  phoneTextMessageContainer.appendChild(contactNameContainer);

  // create arrow icon
  const contactNameArrow = document.createElement("div");
  contactNameArrow.classList.add("contact-name-arrow");
  contactNameContainer.appendChild(contactNameArrow);

  // create contact name text
  const contactNameText = document.createElement("span");
  contactNameText.classList.add("contact-name-text");
  contactNameContainer.appendChild(contactNameText);
  contactNameText.innerText = person;

  // create contact name video icon
  const contactNameVideo = document.createElement("div");
  contactNameVideo.classList.add("contact-name-video");
  contactNameContainer.appendChild(contactNameVideo);

  // create contact name phone icon
  const contactNamePhone = document.createElement("div");
  contactNamePhone.classList.add("contact-name-phone");
  contactNameContainer.appendChild(contactNamePhone);

  // create contact name dots icon
  const contactNameDots = document.createElement("div");
  contactNameDots.classList.add("contact-name-dots");
  contactNameContainer.appendChild(contactNameDots);

  // create texting watermark
  const textingWatermark = document.createElement("div");
  textingWatermark.classList.add("texting-watermark");
  phoneTextMessageContainer.appendChild(textingWatermark);
  textingWatermark.innerText = `Texting with ${person}`;

  // create text message content container
  const textMessageContentContainer = document.createElement("div");
  textMessageContentContainer.classList.add("text-message-content-container");
  phoneTextMessageContainer.appendChild(textMessageContentContainer);
  textMessageContentContainer.style.transform = "scale(0,0)";
  textMessageContentContainer.style.opacity = 0;

  // create avatar column
  const avatarColumn = document.createElement("div");
  avatarColumn.classList.add("avatar-column");
  textMessageContentContainer.appendChild(avatarColumn);

  // create text message content column
  const textMessageContentColumn = document.createElement("div");
  textMessageContentColumn.classList.add("text-message-content-column");
  textMessageContentContainer.appendChild(textMessageContentColumn);

  // create text message avatar
  const textMessageAvatar = document.createElement("div");
  textMessageAvatar.classList.add("text-message-avatar");
  avatarColumn.appendChild(textMessageAvatar);

  // create message
  const message = document.createElement("div");
  message.classList.add("message");
  textMessageContentColumn.appendChild(message);
  message.innerText = textMessage;

  // create text message sound
  const pop = new Audio("./audio/pop.wav");

  setTimeout(() => {
    pop.play();
  }, 700);

  const textReplyButton = document.createElement("button");
  textReplyButton.classList.add("text-reply-button");
  phoneTextMessageContainer.appendChild(textReplyButton);
  textReplyButton.innerText = "How'd you get my number?";
  textReplyButton.style.opacity = 0;
  textReplyButton.disabled = true;

  // handle textReplyButton Click
  textReplyButton.addEventListener("click", handleTextReplyButtonClick);

  // disable text reply button until it is visible
  setTimeout(() => {
    textReplyButton.style.opacity = 1;
    textReplyButton.disabled = false;
  }, 4000);
};

export default createPhoneTextMessage;
