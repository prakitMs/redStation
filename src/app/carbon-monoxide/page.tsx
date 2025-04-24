"use client";
import { useState } from "react";
import SideNav from "@/components/side-nav";
import CalendarButton from "@/components/calendar-button";
import StartLineChart from "@/components/chart";
import { CardAverrage, CardMax, CardMin } from "@/components/card";
import StartTable from "@/components/tables";
import useGetCarbonMonoxide from "@/api/carbon-monoxide";

export default function CarbonMonoxide() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const { data, isLoading } = useGetCarbonMonoxide();

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
      <title>Carbon Monoxide</title>
      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-56 p-1 rounded-b-md">
          Carbon Monoxide (CO)
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
          <div className="w-[50vw] m-2 border-4 border-black rounded-[12]">
            <StartLineChart
              title=" Carbon Monoxide"
              data={data?.formatData}
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
