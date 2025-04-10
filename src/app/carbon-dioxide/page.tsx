"use client";

import CalendarButton from "@/components/calendar-button";
import { CardAverrage, CardMax, CardMin } from "@/components/card";
import StartLineChart from "@/components/chart";
import SideNav from "@/components/side-nav";
import StartTable from "@/components/tables";
import { useState } from "react";

export default function CarbonDioxide() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-40 p-1 rounded-b-md border-double border-black">
          Carbon Dioxide
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
          <div className="w-[50vw] m-3 border-4 border-black rounded-[12] ">
            <StartLineChart title=" Carbon Dioxide" dataKey="pm2.5" />
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
