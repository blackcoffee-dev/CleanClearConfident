import ApiService from '@/api';

const DustService = {
  getPMOfMyAddress({tmX, tmY}) {
    return ApiService.get(
      `http://localhost:3000/me/pm10?tmX=${tmX}&tmY=${tmY}`,
    );
  },
  getPMForecast({year, month, date}) {
    return ApiService.get(
      `http://localhost:3000/forecast?searchDate=${year}-${month}-${date}`,
    );
  },
};

export default DustService;
