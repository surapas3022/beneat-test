export const formatDate = (dateTime, zone = "en-US") => {
  const date = new Date(dateTime);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  const formattedDate = `${date.getDate()} ${date.toLocaleString(zone, {
    month: "long",
  })} ${date.getFullYear()} - ${date.toLocaleTimeString(zone, {
    hour12: false,
  })}`;
  return formattedDate;
};

export const sumPrice = (qty, price) => {
  return Number(qty) * Number(price);
};
