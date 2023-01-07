const vibratePhone = () => {
  console.log("vibrating phone");
  const phone = document.querySelector(".phone");
  phone.classList.add("vibrate-phone");
};

export default vibratePhone;
