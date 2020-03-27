import ApiService from '@/api';

// const KEY = 'ENEHH7afQtN3sN9X5psV0fog0%2BMCKXGRjflug%2BpyKQ82GABJgO6C1l2mLcV7fKZcfb0%2BvciAqyrrsr7ZTiwGxA%3D%3D'
// const getUri = (lat, lng) => `http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=${lat}&tmY=${lng}&ServiceKey=${KEY}&_returnType=json`

const DustService = {
  getPMOfMyAddress({latitude, longitude}) {
    return ApiService.get(
      `http://localhost:3000/me/pm10?lat=${latitude}&lng=${longitude}`,
    );
  },
  getPMForecast({year, month, date}) {
    return ApiService.get(
      `http://localhost:3000/forecast?searchDate=${year}-${month}-${date}`,
    );
  },
};

export default DustService;
