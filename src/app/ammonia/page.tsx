"use client";
import SideNav from "@/components/side-nav";
import CalendarButton from "@/components/calendar-button";
import StartLineChart from "@/components/chart";
import { CardMax, CardMin, CardAverrage } from "@/components/card";
import useGetAmmonia from "@/api/ammonia";
import { useState } from "react";
import StartTable from "@/components/tables";

export default function Ammonia() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const { data, isLoading } = useGetAmmonia();

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
        <div className="text-xl text-black font-semibold bg-slate-200 w-40 p-1 rounded-b-md">
          Ammonia (NH<sub>3</sub>)
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
          <div className="w-[50vw] m-3 border-4 border-black rounded-[12] ">
            <StartLineChart
              title=" Carbon Dioxide"
              data={data?.formatData}
              color="#1d3557"
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
