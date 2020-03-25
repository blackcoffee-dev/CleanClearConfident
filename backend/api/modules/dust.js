const ApiService = require('../index');
require('dotenv').config();

const API_KEY =
  'ENEHH7afQtN3sN9X5psV0fog0%2BMCKXGRjflug%2BpyKQ82GABJgO6C1l2mLcV7fKZcfb0%2BvciAqyrrsr7ZTiwGxA%3D%3D';
const BASE_URL = 'http://openapi.airkorea.or.kr/openapi/services/rest';
const RETURN_JSON_TYPE = '_returnType=json';

const defaultParams = {
  ServiceKey: process.env.API_KEY,
  _returnType: 'json',
};

const DustService = {
  getNearByMsrstnsUri(params) {
    console.log('backend', Object.assign(params, defaultParams));
    return ApiService.get(
      `${BASE_URL}/MsrstnInfoInqireSvc/getNearbyMsrstnList`,
      Object.assign(params, defaultParams),
    );
  },
  getStatusByStationName(stationName) {
    console.log('encodeUrl');
    console.log(encodeURI(stationName));
    return ApiService.get(
      `${BASE_URL}/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${encodeURI(
        stationName,
      )}&dataTerm=month&pageNo=1&numOfRows=10&ServiceKey=${API_KEY}&${RETURN_JSON_TYPE}`,
    );
  },
};

module.exports = DustService;
