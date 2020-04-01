import * as dayjs from 'dayjs';

const searchDate = () => {
  let today = dayjs();
  const hour = today.hour();
  if (hour <= 6) today = today.add(-1, 'day');
  const year = today.format('YYYY');
  const month = today.format('MM');
  const date = today.format('DD');
  return [year, month, date];
};

export default searchDate;
