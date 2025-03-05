export const generateCalendar = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  // 해당 월의 첫, 마지막 날짜
  // const firstDay = new Date(year, month, 1);
  const firstDay = new Date(Date.UTC(year, month, 1)); // ✅ UTC 기준 첫 날 생성

  // const lastDay = new Date(year, month + 1, 0); // 🍀🍀🍀 전 달의 마지막 날을 가져올 수 있음

  const startDate = new Date(firstDay); // 달력의 시작 날짜

  // 달력의 시작 날짜 - 해당 요일
  // startDate.setDate(startDate.getDate() - firstDay.getDay());
  startDate.setUTCDate(startDate.getUTCDate() - firstDay.getUTCDay()); // ✅ UTC 기준 요일 계산

  // firstDay.getDay() → 0(일요일)~6(토요일)

  const days: Date[] = [];
  //일반적인 달력은 7일 × 6주 = 42개 칸으로 구성
  for (let i = 0; i < 42; i++) {
    days.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }

  return days;
};
