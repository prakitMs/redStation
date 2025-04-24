"use client";

import { useGetOxygen } from "@/api/oxygen";
import CalendarButton from "@/components/calendar-button";
import { CardAverrage, CardMax, CardMin } from "@/components/card";
import StartLineChart from "@/components/chart";
import SideNav from "@/components/side-nav";
import StartTable from "@/components/tables";
import { useState } from "react";

export default function Oxygen() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const data = useGetOxygen();

  if (!data) {
    return (
      <div className="fixed inset-0 bg-black/25 h-screen pt-[20vh]">
        <div className="loading mx-auto ">
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
      <title>Oxygen</title>
      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-24 p-1 rounded-b-md border-double border-black">
          Oxygen
        </div>
        <div className="grid grid-cols-3">
          <div className="m-2 lg:m-5">
            <CardMax
              data={data?.summary?.max.value as number}
              unit="ppm"
              time={data?.summary?.max.time as string}
            />
          </div>
          <div className="m-2 lg:m-5">
            <CardMin
              data={data?.summary?.min.value as number}
              unit="ppm"
              time={data?.summary?.min.time as string}
            />
          </div>
          <div className="m-2 lg:m-5">
            <CardAverrage
              data={data?.summary?.avg.value as number}
              unit="ppm"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[50vw] m-2  border-4 border-black rounded-[12] ">
            <StartLineChart title="Oxygen" data={data?.formatData} />
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
