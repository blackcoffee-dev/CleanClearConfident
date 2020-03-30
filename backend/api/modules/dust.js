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
  getUlfptcaAlarmInfo(itemCode = 'PM10') {
    return OpenApiService.get(
      `/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?year=${new Date().getFullYear()}&numOfRows=11&pageSize=11&itemCode=${itemCode}`,
    );
  },
};

module.exports = DustService;
