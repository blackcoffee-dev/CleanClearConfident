const ApiService = require('../index');
require('dotenv').config();

const API_KEY = process.env.API_KEY;
const BASE_URL = 'http://openapi.airkorea.or.kr/openapi/services/rest';
const RETURN_JSON_TYPE = '_returnType=json';

const DustService = {
  getNearByMsrstnsUri(lat, lng) {
    return ApiService.get(
      `${BASE_URL}/MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=${lat}&tmY=${lng}&ServiceKey=${API_KEY}&${RETURN_JSON_TYPE}`,
    );
  },
  getStatusByStationName(stationName) {
    return ApiService.get(
      `${BASE_URL}/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${encodeURI(
        stationName,
      )}&dataTerm=month&pageNo=1&numOfRows=10&ServiceKey=${API_KEY}&${RETURN_JSON_TYPE}`,
    );
  },
};

module.exports = DustService;
