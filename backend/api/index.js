const axios = require('axios');

const ApiService = {
  get(uri, params) {
    console.log('uri', uri, 'params', params);
    return axios.get(uri, {params});
  },
  post(uri, params) {
    return axios.post(uri, params);
  },
  update(uri, params) {
    return axios.put(uri, params);
  },
  delete(uri) {
    return axios.delete(uri);
  },
};

module.exports = ApiService;
