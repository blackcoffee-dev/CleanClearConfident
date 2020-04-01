const OpenApiService = require('../index');

const DustService = {
  getNearByMsrstnsUri(tmX, tmY) {
    return OpenApiService.get(
      `/MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=${tmX}&tmY=${tmY}`,
    );
  },
  getStatusByStationName(stationName) {
    return OpenApiService.get(
      `/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${encodeURI(
        stationName,
      )}&dataTerm=month&pageNo=1&numOfRows=10`,
    );
  },
  getDustForecastByDate(fullDate) {
    return OpenApiService.get(
      `/ArpltnInforInqireSvc/getMinuDustFrcstDspth?searchDate=${fullDate}&InformCode=PM10`,
    );
  },
};

module.exports = DustService;
