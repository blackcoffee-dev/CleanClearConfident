import ApiService from '@/api';

const DustService = {
  getPMOfMyAddress(params) {
    return ApiService.get('http://localhost:3000/me/pm10', params);
  },
  getMajorCitiesPMList(params) {
    return ApiService.get(`http://localhost:3000/major-cities/pm10`, params);
  },
};

export default DustService;
