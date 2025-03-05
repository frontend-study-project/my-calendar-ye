import { useState } from "react";

const COLORS = ["#abdcff", "#f5c1ca", "#ffd499", "#b980d0"];

const EventModal = ({
  date,
  onClose,
  onSave,
}: {
  date: Date;
  onClose: () => void;
  onSave: (title: string, color: string, startDate: Date, endDate: Date) => void;
}) => {
  const [eventText, setEventText] = useState("");
  const [eventColor, setEventColor] = useState(COLORS[0]); // 기본값: 첫 번째 색상
  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState(date);

  // const formatDate = (date: Date) => {
  //   return date.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
  // };

  const handleSave = () => {
    if (startDate > endDate) {
      alert("시작 날짜가 종료 날짜보다 클 수 없습니다.");
      return;
    }
    onSave(eventText, eventColor, startDate, endDate);
    setEventText("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[52]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">일정 추가</h2>

        {/* 날짜 범위 선택 */}
        <label className="block text-sm font-medium mb-1">시작 날짜</label>
        <input
          type="date"
          value={startDate.toISOString().split("T")[0]}
          onChange={(e) => setStartDate(new Date(e.target.value))}
          className="w-full p-2 border rounded-md mb-4"
        />

        <label className="block text-sm font-medium mb-1">종료 날짜</label>
        <input
          type="date"
          value={endDate.toISOString().split("T")[0]}
          onChange={(e) => setEndDate(new Date(e.target.value))}
          className="w-full p-2 border rounded-md mb-4"
        />

        {/* 일정 제목 입력 */}
        <label className="block text-sm font-medium mb-1">일정 제목</label>
        <input
          type="text"
          value={eventText}
          onChange={(e) => setEventText(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
          placeholder="일정 입력"
        />

        {/* 색상 선택 */}
        <label className="block text-sm font-medium mb-1">색상 선택</label>
        <div className="flex gap-2 mb-4">
          {COLORS.map((color) => (
            <button
              key={color}
              onClick={() => setEventColor(color)}
              style={{ backgroundColor: color }}
              className={`w-10 h-10 rounded-full border-2 ${
                eventColor === color ? "border-black" : "border-transparent"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md">
            취소
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-lime-500 text-white rounded-md">
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
