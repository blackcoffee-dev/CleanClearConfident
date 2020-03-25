import MapService from '@/api/modules/map';
import DustService from '@/api/modules/dust';
import {mainCardTemplate} from '@/utils/templates';
import {getPmStatusEmoji} from '@/utils/utils';
import transformCoord from '@/utils/transformCoord';

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
    this.render(address, arpltnInfo.data.pm10);
  };
  this.render = (address, pm10) => {
    document.querySelector('#app').innerHTML = mainCardTemplate(
      address,
      getPmStatusEmoji(pm10),
    );
  };
}

const dustApp = new DustApp();
dustApp.init();
