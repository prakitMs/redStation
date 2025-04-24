"use client";

import useGetUV from "@/api/uv";
import CalendarButton from "@/components/calendar-button";
import { CardAverrage, CardMax, CardMin } from "@/components/card";
import StartLineChart from "@/components/chart";
import SideNav from "@/components/side-nav";
import { useState } from "react";

export default function Ultraviolet() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const data = useGetUV();
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-40 p-1 rounded-b-md">
          Ultraviolet(UV)
        </div>
        <div className="grid grid-cols-3">
          <div className="m-5">
            <CardMax
              data={data?.summary?.max.value as number}
              unit="UV index"
              time={data?.summary?.max.time as string}
            />
          </div>
          <div className="m-5">
            <CardMin
              data={data?.summary?.min.value as number}
              unit="UV index"
              time={data?.summary?.min.time as string}
            />
          </div>
          <div className="m-5">
            <CardAverrage
              data={data?.summary?.avg.value as number}
              unit="UV index"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[50vw] m-2 border-4 border-black rounded-[12] ">
            <StartLineChart title="Ultraviolet" data={data?.formatData} />
          </div>
        </div>
      </div>
      <CalendarButton />
    </div>
  );
}
