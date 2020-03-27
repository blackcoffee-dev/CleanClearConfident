import MapService from '@/api/modules/map';
import DustService from '@/api/modules/dust';
import {mainCardTemplate, forecastCardTemplate} from '@/utils/templates';
import {getPmStatusEmoji} from '@/utils/utils';
import transformCoord from '@/utils/transformCoord';
import searchDate from '@/utils/searchDate';
import findForecastAreaIndex from './utils/findArea';

function DustApp() {
  this.init = async () => {
    navigator.geolocation.getCurrentPosition(position =>
      this.getDustStatus(position),
    );
  };
  this.getDustStatus = async position => {
    const {latitude, longitude} = position.coords;
    const msrstnList = await MapService.getMyAddress({latitude, longitude});
    const address = msrstnList.data.results[0].formatted_address.split(' ');
    const [tmX, tmY] = transformCoord(longitude, latitude);
    const arpltnInfo = await DustService.getPMOfMyAddress({
      latitude: tmY,
      longitude: tmX,
    });

    const [year, month, date] = searchDate();
    const forecastInfo = await DustService.getPMForecast({year, month, date});
    const totalForecast = forecastInfo.data.forecast;
    const releaseTime = totalForecast[0].f_data_time;
    const pickForecast = totalForecast.filter(
      val => val.f_data_time === releaseTime,
    );
    const [, province, city] = address;

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
      };
    });
    this.render(address, arpltnInfo.data.pm10, finalForecast);
  };
  this.render = (address, pm10, finalForecast) => {
    document.querySelector('#app').innerHTML = mainCardTemplate(
      address,
      getPmStatusEmoji(pm10),
    );
    document
      .querySelector('.max-w-sm')
      .insertAdjacentHTML('beforeend', forecastCardTemplate(finalForecast));
  };
}

const dustApp = new DustApp();
dustApp.init();
