"use client";
import CalendarButton from "@/components/calendar-button";
import SideNav from "@/components/side-nav";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Ultraviolet() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleDateSelect = async (selectedDate: Date | undefined) => {
    if (!selectedDate) return;

    await new Promise((resolve) => setTimeout(resolve, 500));

    setDate(selectedDate);
    console.log("Date selected:", selectedDate);
  };

  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-40 p-1 rounded-b-md">
          Ultraviolet(UV)
        </div>
        <CalendarButton />
      </div>
    </div>
  );
}
