const express = require('express');
const DustService = require('../api/modules/dust');

const router = express.Router();

router.get('/me/pm10', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const nearStations = await DustService.getNearByMsrstnsUri(
    req.query.lat,
    req.query.lng,
  );
  const dustStatus = await DustService.getStatusByStationName(
    nearStations.data.list[0].stationName,
  );
  res.status(200).json({
    pm10: dustStatus.data.list[0].pm10Grade,
  });
});
router.get('/forecast', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const dustForecast = await DustService.getDustForecastByDate(
    req.query.searchDate,
  );
  res.status(200).json({
    forecast: dustForecast.data.list,
  });
});

module.exports = router;
