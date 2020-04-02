const axios = require('axios')

function getLocation() {
  return new Promise((resolve, reject) => {
    const { geolocation } = navigator
    if(!geolocation) reject('GPS를 지원하지 않습니다')
    else {
      const options = {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity
      }
      geolocation.getCurrentPosition(({coords}) => resolve(coords), err => reject(err), options)
    }
  })
}

function getAddr(latitude, longitude) {
  const GOOGLE_API_KEY = 'AIzaSyD-basIV4EJ7s-H7I2EqxDT33sAweSVCYw'
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&language=ko&key=${GOOGLE_API_KEY}`)
}

const key = '%2B%2BKoCiedn%2FxxVDEbkNoKDypjWPZwCxnsXs4bufrpYQIW43L%2FwJaULU9c8jJH91UXbHFLvYwRuFQTXkRMqCfQJQ%3D%3D'
function getTmTx(umd='신천동') { // CORS
  const umdName = encodeURI(umd)
  return axios.get(`http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getTMStdrCrdnt?umdName=${umdName}&pageNo=1&numOfRows=10&ServiceKey=${key}&_returnType=json`)
}

(async function () {
  try {
    // FE
    const { latitude, longitude } = await getLocation()
    console.log({ latitude, longitude })
    const res = await getAddr(latitude, longitude)
    const data = await res.json()
    const [_, __, sgg, umd] = data.results[0].formatted_address.split(' ')


    // BE
    // const sgg = '송파구'
    // const umd = '신천동'
    const {data} = await getTmTx(umd)
    // const data2 = await res2.json()

    // get tmX, tmY
    const [result] = data.list.filter(l => l.sggName === sgg && l.umdName === umd)
    if(!result) return 
    const {tmX, tmY} = result
    console.log({tmX, tmY})

    // get 측정소명
    const api2 = `http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=${tmX}&tmY=${tmY}&ServiceKey=${key}&_returnType=json`
    const {data: data2} = await axios.get(api2)
    const stationNames = data2.list.map(l => l.stationName) 
    console.log({stationNames}) // [송파구, 광진구, 강동구]

    const serviceUrl = `http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc`
    const operation = `getMsrstnAcctoRltmMesureDnsty`
    const param = {  // 측정소명과 측정데이터 기간(일, 한달, 3개월)으로 해당 측정소의 일반항목 측정정보를 제공하는 측정소별 실시간 측정정보 조회
      stationName: encodeURI(stationNames[0]), // 측정소 이름
      dataTerm: 'daily', // 요청 데이터기간(1일: DAILY, 1개월: MONTH, 3개월: 3MONTH)
      pageNo: 1,     // 페이지 번호
      numOfRows: 10, // 한 페이지 결과 수
      ServiceKey: key,
      ver: 1.3,
    }
    const qs = param => Object
      .entries({...param, _returnType: 'json'})
      .map(([k, v]) => `${k}=${v}`)
      .join('&')

    const {data: res} = await axios.get(`${serviceUrl}/${operation}?${qs(param)}`)
    
    // FE
    const [recentResult] = res.list
    console.log({recentResult})
  } catch (err) {
    console.log({ err })
  }
})()

//  37.4487041, 126.79271159999999

/* Todo 
  구글 지도 API 키 발급. 
  https://blog.cosmosfarm.com/archives/389/%EA%B5%AC%EA%B8%80-%EC%A7%80%EB%8F%84-api-%ED%82%A4-%EB%B0%9C%EA%B8%89-%EB%B0%9B%EB%8A%94-%EB%B0%A9%EB%B2%95-maps-javascript-api/
*/
