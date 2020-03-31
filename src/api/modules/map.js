import ApiService from '@/api';
import {GOOGLE_API_KEY} from '@/utils/constants';

const GEOCODE_BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

const MapService = {
  getMyAddress({latitude, longitude}) {
    return ApiService.get(
      `${GEOCODE_BASE_URL}?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`,
    );
  },
};

export default MapService;
