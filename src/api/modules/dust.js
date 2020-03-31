import ApiService from '@/api';

const DustService = {
  getPMOfMyAddress({latitude, longitude}) {
    return ApiService.get(
      `http://localhost:3000/me/pm10?lat=${latitude}&lng=${longitude}`,
    );
  },
  getMainCitiesPollution(pm = 'PM10') {
    return ApiService.get(
      `http://localhost:3000/mainCities/pollution?itemCode=${pm}`,
    );
  },
};

export default DustService;
