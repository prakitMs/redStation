"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { AiFillCloseSquare } from "react-icons/ai";

interface CalendarButtonProps {
  onChange?: (date: Date) => void;
}

const CalendarButton = ({ onChange }: CalendarButtonProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const handleDateSelect = async (selectedDate: Date | undefined) => {
    if (!selectedDate) return;

    await new Promise((resolve) => setTimeout(resolve, 500));

    setDate(selectedDate);
    onChange?.(selectedDate);
    setIsCalendarVisible(false);
    console.log("Date selected:", selectedDate);
  };

  return (
    <div>
      <div className="flex justify-end">
        <Button
          onClick={() => setIsCalendarVisible((prev) => !prev)}
          className="bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          {isCalendarVisible ? "ปิดปฏิทิน" : "เลือกวันที่"}
        </Button>
      </div>

      {isCalendarVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md">
          {/* ปุ่มปิด (X) */}
          <button
            onClick={() => setIsCalendarVisible(false)}
            className="absolute top-5 right-5 text-white hover:text-gray-300"
          >
            <AiFillCloseSquare className="w-6 h-6" />
          </button>

          <Calendar mode="single" selected={date} onSelect={handleDateSelect} />
        </div>
      )}
    </div>
  );
};

export default CalendarButton;
