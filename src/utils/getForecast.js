import DustService from '@/api/modules/dust';
import {getPmStatusEmoji} from '@/utils/utils';
import searchDate from '@/utils/searchDate';
import findForecastAreaIndex from '@/utils/findArea';

const [year, month, date] = searchDate();

const convertGrade = grade => {
  switch (grade) {
    case '좋음':
      return '1';
    case '보통':
      return '2';
    case '나쁨':
      return '3';
    case '매우나쁨':
      return '4';
    case '매우 나쁨':
      return '4';
    default:
      return '-1';
  }
};

const getForecast = async (province, city) => {
  const forecastInfo = await DustService.getPMForecast({year, month, date});
  const totalForecast = forecastInfo.data.forecast;
  const releaseTime = totalForecast[0].f_data_time;
  const pickForecast = totalForecast.filter(
    val => val.f_data_time === releaseTime,
  );
  const forecastAreaIndex = findForecastAreaIndex(province, city);
  const finalForecast = pickForecast.map(data => {
    const makeGradeArray = data.informGrade.split(',');
    let [area, grade] = makeGradeArray[forecastAreaIndex].split(':');
    area = area.trim();
    grade = grade.trim();
    return {
      date: data.informData,
      grade: getPmStatusEmoji(convertGrade(grade)),
      area,
      gif: data.imageUrl7,
    };
  });
  return finalForecast;
};

export default getForecast;
