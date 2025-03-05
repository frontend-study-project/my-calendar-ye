import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <main className="w-full max-w-[1200px] mx-auto bg-white p-10 ">
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onToday={handleToday}
      />
      <CalendarBody currentDate={currentDate} />
    </main>
  );
};

export default Calendar;
