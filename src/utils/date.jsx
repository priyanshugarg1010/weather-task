export const getDate = ({ weatherLocation }) => {
  let apiDateFormat = "";
  if (weatherLocation) {
    const localTime = weatherLocation.localtime;
    // const localTime = "2023-11-25 4:28";

    // Extract the date portion
    const dateOnly = localTime.split(" ")[0];
    apiDateFormat = dateOnly;
  } else {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(today.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    apiDateFormat = formattedDate;
  }

  const dateObj = new Date(apiDateFormat);

  const options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  // Remove commas from the formatted date
  const formattedDateWithoutCommas = formattedDate.replace(/,/g, "");

  return formattedDateWithoutCommas;
};

export const convertDateFormat = (dateString) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [, month, day] = dateString.split("-");
  const monthAbbreviation = months[parseInt(month, 10) - 1];
  return `${parseInt(day, 10)} ${monthAbbreviation}`;
};
