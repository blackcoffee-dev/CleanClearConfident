import MapService from '@/api/modules/map';
import DustService from '@/api/modules/dust';
import {mainCardTemplate, forecastCardTemplate} from '@/utils/templates';
import {getPmStatusEmoji} from '@/utils/utils';
import transformCoord from '@/utils/transformCoord';
import getForecast from '@/utils/getForecast';

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
    const {
      data: {pm10},
    } = await DustService.getPMOfMyAddress({tmX, tmY});
    const [, province, city] = address;
    const finalForecast = await getForecast(province, city);
    this.render(address, pm10, finalForecast);
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
