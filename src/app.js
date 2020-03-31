import MapService from '@/api/modules/map';
import DustService from '@/api/modules/dust';
import {mainCardTemplate, citiesCardTemplate} from '@/utils/templates';
import {getPmStatusEmoji} from '@/utils/utils';

function DustApp() {
  this.init = async () => {
    navigator.geolocation.getCurrentPosition(position =>
      this.getDustStatus(position),
    );

    const mainCitiesPMList = await this.getPMMainCities();
    this.renderMainCitiesPollution(mainCitiesPMList);
  };
  this.getDustStatus = async position => {
    const {latitude, longitude} = position.coords;
    const {
      data: {results},
    } = await MapService.getMyAddress({latitude, longitude});
    const address = results[0].formatted_address.split(' ');
    const {
      data: {pm10},
    } = await DustService.getPMOfMyAddress({
      latitude,
      longitude,
    });
    this.render(address, pm10);
  };
  this.getPMMainCities = async () => {
    const {
      data: {pollutionList},
    } = await DustService.getMainCitiesPollution();

    return pollutionList.map(({districtName, issueVal}) => ({
      districtName,
      issueVal,
    }));
  };
  this.renderMainCitiesPollution = mainCitiesPMList => {
    const mainCitiesMTemplate = citiesCardTemplate(mainCitiesPMList);
    document
      .querySelector('#app')
      .insertAdjacentHTML('beforeend', mainCitiesMTemplate);
  };
  this.render = (address, pm10) => {
    document
      .querySelector('#app')
      .insertAdjacentHTML(
        'beforeend',
        mainCardTemplate(address, getPmStatusEmoji(pm10)),
      );
  };
}

const dustApp = new DustApp();
dustApp.init();
