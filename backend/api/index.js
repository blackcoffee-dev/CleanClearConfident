const axios = require('axios');
require('dotenv').config();

const {BASE_URL_OPEN_API, API_KEY} = process.env;
const RETURN_JSON_TYPE = '_returnType=json';

const OpenApiService = {
  get(uri) {
    return axios.get(
      `${BASE_URL_OPEN_API}${uri}&ServiceKey=${API_KEY}&${RETURN_JSON_TYPE}`,
    );
  },
};

module.exports = OpenApiService;
