import { useState } from "react";
import EventModal from "./EventModal";
import { generateCalendar } from "../../utils/calendarUtils";

const CalendarBody = ({ currentDate }: { currentDate: Date }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<{
    [key: string]: { title: string; color: string; startDate: Date; endDate: Date };
  }>({});
  const [showModal, setShowModal] = useState(false);

  const days = generateCalendar(currentDate);
  const month = currentDate.getMonth();
  const today = new Date();

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleSaveEvent = (eventTitle: string, eventColor: string, startDate: Date, endDate: Date) => {
    const newEvents = { ...events };

    let date = new Date(startDate);
    // startDate부터 endDate까지 모든 날짜 반복
    while (date <= endDate) {
      newEvents[date.toDateString()] = { title: eventTitle, color: eventColor, startDate, endDate };
      date.setDate(date.getDate() + 1);
    }

    setEvents(newEvents);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-7 gap-1 text-center">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <div key={day} className="h-10 leading-10 border text-center font-bold bg-lime-50">
            {day}
          </div>
        ))}

        {days.map((date) => {
          const isCurrentMonth = date.getMonth() === month;
          const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
          const event = events[date.toDateString()];
          const todayClass = date.toDateString() === today.toDateString() ? "bg-lime-100" : "";
          const selectedClass = isSelected ? "bg-lime-300" : "";
          const dayClass = date.getDay() === 0 ? "text-red-500" : date.getDay() === 6 ? "text-blue-500" : "text-black";

          return (
            <div
              key={date.toISOString()}
              onClick={() => handleDateClick(date)}
              className={`p-2 h-32 border rounded-md cursor-pointer ${selectedClass}  ${todayClass}`}
              style={{ backgroundColor: event?.color || "transparent" }}
            >
              <span className={`${isCurrentMonth ? dayClass : "text-gray-400"}`}>{date.getDate()}</span>
              {event && <div className="text-sm mt-1">{event.title}</div>}
            </div>
          );
        })}
      </div>

      {showModal && selectedDate && (
        <EventModal date={selectedDate} onClose={() => setShowModal(false)} onSave={handleSaveEvent} />
      )}
    </div>
  );
};

export default CalendarBody;
