const OpenApiService = require('../index');

const DustService = {
  getNearByMsrstnsUri(lat, lng) {
    return OpenApiService.get(
      `/MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=${lat}&tmY=${lng}`,
    );
  },
  getStatusByStationName(stationName) {
    return OpenApiService.get(
      `/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${encodeURI(
        stationName,
      )}&dataTerm=month&pageNo=1&numOfRows=10`,
    );
  },
};

module.exports = DustService;
