const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.API_KEY;
const BASE_URL = 'http://openapi.airkorea.or.kr/openapi/services/rest';
const RETURN_JSON_TYPE = '_returnType=json';

const OpenApiService = {
  get(uri) {
    return axios.get(
      `${BASE_URL}${uri}&ServiceKey=${API_KEY}&${RETURN_JSON_TYPE}`,
    );
  },
};

module.exports = OpenApiService;
