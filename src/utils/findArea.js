const FORECASTAREA_ARRAY = [
  '서울특별시',
  '제주특별자치시도',
  '전라남도',
  '전라북도',
  '광주광역시',
  '경상남도',
  '경상북도',
  '울산광역시',
  '대구광역시',
  '부산광역시',
  '충청남도',
  '충청북도',
  '세종특별자치시',
  '대전광역시',
  '강원도',
  '',
  '경기도',
  '',
  '인천광역시',
];
// const REAL_FORECASTAREA_ARRAY = ['서울특별시', '제주특별자치시도', '전라남도', '전라북도', '광주광역시',
//                         '경상남도', '경상북도', '울산광역시', '대구광역시', '부산광역시',
//                         '충청남도', '충청북도', '세종', '대전', '강원도영동',
//                         '강원도영서', '경기남부', '경기북부', '인천']
const NORTHGYEONGGI_ARRAY = [
  '고양시',
  '파주시',
  '양주시',
  '의정부',
  '동두천',
  '연천군',
  '포천시',
  '가평군',
  '남양주',
  '구리시',
];
const YEONGSEO_ARRAY = [
  '고성군',
  '속초시',
  '양양군',
  '강릉시',
  '동해시',
  '삼척시',
  '태백시',
];

const findForecastAreaIndex = (province, city) => {
  const refCity = city.substring(0, 3);
  let index = FORECASTAREA_ARRAY.indexOf(province).toString();
  switch (index) {
    case '10':
      if (refCity === '연기군') index = 12;
      return index;
    case '14':
      if (YEONGSEO_ARRAY.indexOf(refCity) !== -1) index = 15;
      return index;
    case '16':
      if (NORTHGYEONGGI_ARRAY.indexOf(refCity) !== -1) index = 17;
      return index;
    default:
      return index;
  }
};

export default findForecastAreaIndex;
