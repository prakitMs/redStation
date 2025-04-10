"use client";
import { useState } from "react";
import SideNav from "@/components/side-nav";
import CalendarButton from "@/components/calendar-button";
import StartLineChart from "@/components/chart";
import { CardAverrage, CardMax, CardMin } from "@/components/card";
import StartTable from "@/components/tables";

export default function CarbonMonoxide() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-56 p-1 rounded-b-md">
          Carbon Monoxide (CO)
        </div>
        <div className="grid grid-cols-3">
          <div className="m-5">
            <CardMax unit="ppm" />
          </div>
          <div className="m-5">
            <CardMin unit="ppm" />
          </div>
          <div className="m-5">
            <CardAverrage unit="ppm" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[50vw] m-2 border-4 border-black rounded-[12]">
            <StartLineChart
              title=" Carbon Monoxide"
              dataKey="pm10"
              color="#2a9d8f"
            />
          </div>
        </div>
        <div className="flex justify-center">
          {!!selectedDate && (
            <div className="m-2 lg:m-5 bg-slate-800 border-solid rounded-lg w-[70vw]">
              <StartTable />
            </div>
          )}
        </div>
      </div>
      <CalendarButton onChange={(date) => setSelectedDate(date)} />
    </div>
  );
}
