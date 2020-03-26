import proj4 from 'proj4/dist/proj4';

proj4.defs([
  ['EPSG:4326', '+proj=longlat +datum=WGS84 +no_defs'],
  [
    'EPSG:5186',
    '+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
  ],
]);

const transformCoord = (lon, lat) => {
  return proj4(proj4.defs('EPSG:4326'), proj4.defs('EPSG:5186'), [lon, lat]);
};

export default transformCoord;
