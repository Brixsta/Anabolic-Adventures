const getTime = () => {
  let currentTime;
  const currentDate = new Date();
  let hours = currentDate.getHours();
  let mins = currentDate.getMinutes();
  let amOrPm;

  if (hours > 12 && hours < 24) {
    amOrPm = "PM";
  } else {
    amOrPm = "AM";
  }
  if (hours > 12) {
    hours -= 12;
  }
  currentTime = `${hours}:${mins} ${amOrPm}`;

  return currentTime;
};

export default getTime;
