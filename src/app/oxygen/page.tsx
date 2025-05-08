"use client";

import { useGetDefaultData } from "@/api/get-data-graph";
import { AlertNotFound } from "@/components/alert";
import CalendarButton from "@/components/calendar-button";
import { CardAverrage, CardMax, CardMin } from "@/components/card";
import StartLineChart from "@/components/chart";
import { TimeIntervalSelection } from "@/components/selector";
import SideNav from "@/components/side-nav";
import { StartTable } from "@/components/tables";
import { useState } from "react";

export default function Oxygen() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTimeInterval, setSelectedTimeInterval] =
    useState<string>("1h");
  const { data, isLoading } = useGetDefaultData({
    date: selectedDate,
    type: "O2",
    timeSelect: selectedTimeInterval,
  });

  const unit = "ppm";
  const title = "Oxygen";

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

  if (!data?.data?.length) {
    return <AlertNotFound />;
  }

  return (
    <div className="flex h-screen">
      <SideNav />
      <title>Oxygen</title>
      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-24 p-1 rounded-b-md border-double border-black">
          Oxygen(O<sub>2</sub>)
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
    </div>
  );
}
