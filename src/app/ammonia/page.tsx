"use client";
import SideNav from "@/components/side-nav";
import CalendarButton from "@/components/calendar-button";
import StartLineChart from "@/components/chart";
import { CardMax, CardMin, CardAverrage } from "@/components/card";
import { useState } from "react";
import { StartTable } from "@/components/tables";
import { useGetDefaultData } from "@/api/get-data-graph";
import { TimeIntervalSelection } from "@/components/selector";

export default function Ammonia() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTimeInterval, setSelectedTimeInterval] =
    useState<string>("1h");
  const { data, isLoading } = useGetDefaultData({
    date: selectedDate,
    type: "NH3",
    timeSelect: selectedTimeInterval,
  });
  const unit = "ppm";
  const title = "Ammonia";

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

        <div className="flex justify-end gap-4 z-50">
          <div className="z-50">
            <CalendarButton onChange={(date) => setSelectedDate(date)} />
          </div>

          <TimeIntervalSelection
            onChange={(timeInterval) => setSelectedTimeInterval(timeInterval)}
          />
        </div>

        <div className="grid grid-cols-3">
          <div className="m-5">
            <CardMax
              data={data?.summary?.max.value as number}
              unit={unit}
              time={data?.summary?.max.time as string}
            />
          </div>
          <div className="m-5">
            <CardMin
              data={data?.summary?.min.value as number}
              unit={unit}
              time={data?.summary?.min.time as string}
            />
          </div>
          <div className="m-5">
            <CardAverrage
              data={data?.summary?.avg.value as number}
              unit={unit}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[50vw] m-3 border-4 border-black rounded-[12] ">
            <StartLineChart
              title={title}
              data={data?.formatData}
              color="#1d3557"
            />
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
    </div>
  );
}
