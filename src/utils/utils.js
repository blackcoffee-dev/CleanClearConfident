export const getPmStatusEmoji = grade => {
  switch (grade) {
    case '1':
      return {
        emoji: '😃',
        status: '좋음',
        text: '좋은 날씨에요. 산책 다녀오세요.',
      };
    case '2':
      return {
        emoji: '🙂',
        status: '보통',
        text: '마스크가 필요 없는 무난한 날입니다.',
      };
    case '3':
      return {
        emoji: '😨',
        status: '나쁨',
        text: '마스크를 쓰고 주의해주세요!',
      };
    case '4':
      return {
        emoji: '😱',
        status: '매우 나쁨',
        text: '위험합니다. 외출을 삼가세요!',
      };
    default:
      return {
        emoji: '😭',
        status: '측정 오류',
        text: '측정에 오류가 발생했습니다.',
      };
  }
};
