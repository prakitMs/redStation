"use client";
import useGetHumidity from "@/api/humidity";
import CalendarButton from "@/components/calendar-button";
import { CardAverrage, CardMax, CardMin } from "@/components/card";
import StartLineChart, { TestChart } from "@/components/chart";
import SideNav from "@/components/side-nav";
import StartTable from "@/components/tables";
import { filterDate, formatDate } from "@/components/utils/format";
import { useState } from "react";

export default function Humidity() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const data = useGetHumidity();
  const dateNow = new Date();
  console.log(filterDate(dateNow));
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-[95px] p-1 rounded-b-md border-double border-black">
          Humidity
        </div>

        <div className="grid grid-cols-3">
          <div className="m-5">
            <CardMax
              data={data?.summary?.max.value as number}
              unit="ppm"
              time={data?.summary?.max.time as string}
            />
          </div>
          <div className="m-5">
            <CardMin
              data={data?.summary?.min.value as number}
              unit="ppm"
              time={data?.summary?.min.time as string}
            />
          </div>
          <div className="m-5">
            <CardAverrage
              data={data?.summary?.avg.value as number}
              unit="ppm"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[50vw] m-2 border-4 border-black rounded-[12] ">
            <StartLineChart
              title=" Humidity"
              data={data?.formatData}
              color="#D68FD6"
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
