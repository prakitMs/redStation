"use client";
import useGetRainfall from "@/api/rainfall";
import CalendarButton from "@/components/calendar-button";
import { CardMax, CardAverrage, CardMin } from "@/components/card";
import StartLineChart from "@/components/chart";
import SideNav from "@/components/side-nav";
import StartTable from "@/components/tables";
import { useState } from "react";

export default function Rainfall() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const { data, isLoading } = useGetRainfall();

  if (isLoading || !data) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
        <div className="loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-20 p-1 rounded-b-md">
          Rainfall
        </div>

        <div className="grid grid-cols-3">
          <div className="m-5">
            <CardMax
              data={data?.summary?.max.value as number}
              unit="mm"
              time={data?.summary?.max.time as string}
            />
          </div>
          <div className="m-5">
            <CardMin
              data={data?.summary?.min.value as number}
              unit="mm"
              time={data?.summary?.min.time as string}
            />
          </div>
          <div className="m-5">
            <CardAverrage data={data?.summary?.avg.value as number} unit="mm" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[50vw] m-3 border-4 border-black rounded-[12] ">
            <StartLineChart title=" Carbon Dioxide" data={data?.formatData} />
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
