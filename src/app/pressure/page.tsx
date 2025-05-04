"use client";

import { useGetDefaultData } from "@/api/get-data-graph";
import CalendarButton from "@/components/calendar-button";
import { CardAverrage, CardMax, CardMin } from "@/components/card";
import StartLineChart from "@/components/chart";
import { TimeIntervalSelection } from "@/components/selector";
import SideNav from "@/components/side-nav";
import { StartTable } from "@/components/tables";
import { useState } from "react";

export default function Oxygen() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTimeInterval, setSelctedTimeInterval] = useState<string>("1h");
  const { data, isLoading } = useGetDefaultData({
    date: selectedDate,
    type: "Pressure",
    timeSelect: selectedTimeInterval,
  });

  const unit = "Pa";
  const title = "Pressure";

  if (isLoading || !data) {
    return (
      <div className="fixed inset-0 bg-gray-200/25 h-screen pt-[20vh]">
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
      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-24 p-1 rounded-b-md border-double border-black">
          Pressure
        </div>

        <div className="grid grid-cols-3">
          <div className="m-2 lg:m-5">
            <CardMax
              data={data?.summary?.max.value as number}
              unit={unit}
              time={data?.summary?.max.time as string}
            />
          </div>
          <div className="m-2 lg:m-5">
            <CardMin
              data={data?.summary?.min.value as number}
              unit={unit}
              time={data?.summary?.min.time as string}
            />
          </div>
          <div className="m-2 lg:m-5">
            <CardAverrage
              data={data?.summary?.avg.value as number}
              unit={unit}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[50vw] m-2  border-4 border-black rounded-[12] ">
            <StartLineChart title={title} data={data?.formatData} />
          </div>
        </div>
        <div className="flex justify-center">
          {!!selectedDate && (
            <div>
              <StartTable
                date={selectedDate}
                data={data.formatData}
                title={title}
                unit={unit}
              />
            </div>
          )}
        </div>
      </div>
      <CalendarButton onChange={(date) => setSelectedDate(date)} />
      <TimeIntervalSelection
        onChange={(timeInterval) => setSelctedTimeInterval(timeInterval)}
      />
    </div>
  );
}
