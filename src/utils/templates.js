import * as dayjs from 'dayjs';

export const mainCardTemplate = (address, grade) => {
  const [, , city, detail] = address;
  return `<div class="flex justify-center items-center h-100vh">
  <div
    class="max-w-sm rounded overflow-hidden shadow-lg text-center py-8 px-12 bg-white"
  >
    <div class="text-base">현재 위치</div>
    <div class="font-bold text-3xl">${city} ${detail}</div>
    <div class="text-base mb-2">${dayjs().format('YYYY-MM-DD HH:MM')}</div>
    <div class="h-100 flex justify-center items-center">
      <div class="text-6xl">
        ${grade.emoji}
      </div>
    </div>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${grade.status}</div>
      <p class="text-gray-700 text-base">
      ${grade.text}
      </p>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
      >
        지도보기
      </button>
    </div>
  </div>
</div>`;
};

export const forecastCardTemplate = forecast => {
  const renderedHTML = forecast
    .map((data, idx) => {
      return `
    <div class="item" data-index=${idx}>
      <span>${data.date}</span>
      <span>${data.grade.emoji}</span>
      <span><b>${data.grade.status}</b></span>
      <span>${data.area}</span>
    </div>
    `;
    })
    .join('');
  return `
    <div class="forecast">
      <div class="font-bold text-xl mb-2">일별 예보</div>
      ${renderedHTML}
      <div class="font-bold text-xl mb-2">대기질예측모델</div>
      <img src=${forecast[0].gif}>
    </div>
  `;
};
