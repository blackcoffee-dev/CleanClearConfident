const searchDate = () => {
  let today = new Date();
  const hour = today.getHours();
  if (hour <= 6) today = new Date(today - 86400000);
  const year = today.getFullYear();
  const month = `0${today.getMonth() + 1}`.slice(-2);
  const date = `0${today.getDate()}`.slice(-2);
  return [year, month, date];
};

export default searchDate;
