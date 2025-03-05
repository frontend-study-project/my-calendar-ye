interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}

const CalendarHeader = ({ currentDate, onPrevMonth, onNextMonth, onToday }: CalendarHeaderProps) => {
  const formattedDate = `${currentDate.getFullYear()}.${String(currentDate.getMonth() + 1).padStart(2, "0")}`;

  return (
    <header className="flex items-center justify-between w-full p-4">
      <h2 className="text-3xl font-semibold text-lime-900">{formattedDate}</h2>
      <ul className="flex gap-2 text-lime-700">
        <li>
          <button
            onClick={onPrevMonth}
            aria-label="이전 월 보기"
            className="px-4 py-2 border border-lime-500 rounded-lg"
          >
            &lt;
          </button>
        </li>
        <li>
          <button
            onClick={onNextMonth}
            aria-label="다음 월 보기"
            className="px-4 py-2 border border-lime-500 rounded-lg"
          >
            &gt;
          </button>
        </li>
        <li>
          <button onClick={onToday} aria-label="오늘 월 보기" className="px-4 py-2 border border-lime-500 rounded-lg">
            오늘
          </button>
        </li>
      </ul>
    </header>
  );
};

export default CalendarHeader;
