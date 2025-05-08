"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { DateRange } from "react-day-picker";

interface CalendarButtonProps {
  onChange?: (date: DateRange) => void;
}

const CalendarButton = ({ onChange }: CalendarButtonProps) => {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const handleDateSelect = async (selectedDate: DateRange | undefined) => {
    if (!selectedDate) return;

    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate delay

    setDate(selectedDate);

    if (selectedDate.from && selectedDate.to) {
      onChange?.(selectedDate);
      setIsCalendarVisible(false);
    }
  };

  const isDateDisabled = (date: Date) => {
    return dayjs(date).isAfter(dayjs(), "day");
  };

  return (
    <div>
      <div className="flex justify-end">
        <Button
          onClick={() => setIsCalendarVisible((prev) => !prev)}
          className="bg-[#003e78] text-white rounded-md hover:bg-blue-600 transition z-0"
        >
          {isCalendarVisible ? "Close" : "Select date"}
        </Button>
      </div>

      {isCalendarVisible && (
        <div className="absolute top-36 right-10 z-50">
          <div className="relative z-50 p-4 bg-[#85D7E1] rounded-lg shadow-lg">
            <Calendar
              mode="range"
              selected={date}
              onSelect={handleDateSelect}
              disabled={isDateDisabled}
              classNames={{
                day_outside: "text-muted-foreground",
              }}
            />
            <Button
              onClick={() => setDate(undefined)}
              className="mt-4 bg-gray-200 text-black hover:bg-gray-400 transition"
            >
              รีเซ็ตวันที่
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarButton;
