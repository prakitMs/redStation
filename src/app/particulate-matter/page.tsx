"use client";
import useGetPM from "@/api/particulate-matter";
import CalendarButton from "@/components/calendar-button";
import { CardMax, CardMin, CardAverrage } from "@/components/card";
import StartLineChart from "@/components/chart/StartLineChart";
import { TimeIntervalSelection } from "@/components/selector";

import SideNav from "@/components/side-nav";
import { TablePM } from "@/components/tables";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function PaticulateMatter() {
  const [selectedDate, setSelectedDate] = useState<DateRange | undefined>(
    undefined
  );
  const [selectedTimeInterval, setSelectedTimeInterval] =
    useState<string>("1h");
  const { data, isLoading } = useGetPM({
    date: selectedDate,
    timeSelect: selectedTimeInterval,
  });

  const unit = "ppm";
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
      <title>Paticulate Matter(PM)</title>
      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-56 p-1 rounded-b-md border-double border-black">
          Paticulate Matter(PM)
        </div>

        <div className="flex justify-end gap-4 z-50">
          <div className="z-50">
            <CalendarButton onChange={(date) => setSelectedDate(date)} />
          </div>

          <TimeIntervalSelection
            onChange={(timeInterval) => setSelectedTimeInterval(timeInterval)}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-4">
          <div className="grid grid-cols-3">
            <div className="ml-2 mr-2 ">
              <CardMax
                data={data?.summary?.PM1.max.value}
                time={data?.summary?.PM1.max.time}
                unit="µg./m3"
              />
            </div>
            <div className="ml-2 mr-2">
              <CardMin
                data={data?.summary?.PM1.min.value}
                time={data?.summary?.PM1.min.time}
                unit="µg./m3"
              />
            </div>
            <div className="ml-2 mr-2">
              <CardAverrage data={data?.summary?.PM1.avg.value} unit="µg./m3" />
            </div>
            <div>
              <div className="w-[55vw] lg:w-[33vw] m-5 border-4 border-black rounded-[12]  ">
                <StartLineChart title="PM 1.0" data={data.dataPM1} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="ml-2 mr-2 ">
              <CardMax
                data={data?.summary?.PM25.max.value}
                time={data?.summary?.PM25.max.time}
                unit="µg./m3"
              />
            </div>
            <div className="ml-2 mr-2">
              <CardMin
                data={data?.summary?.PM25.min.value}
                time={data?.summary?.PM25.min.time}
                unit="µg./m3"
              />
            </div>
            <div className="ml-2 mr-2">
              <CardAverrage
                data={data?.summary?.PM25.avg.value}
                unit="µg./m3"
              />
            </div>
            <div className="w-[55vw]  lg:w-[33vw] m-5  border-4 border-black rounded-[12] ">
              <StartLineChart title="PM 2.5" data={data?.dataPM25} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="grid grid-cols-3">
            <div className="ml-2 mr-2 ">
              <CardMax
                data={data?.summary?.PM10.max.value}
                time={data?.summary?.PM10.max.time}
                unit="µg./m3"
              />
            </div>
            <div className="ml-2 mr-2">
              <CardMin
                data={data?.summary?.PM10.min.value}
                time={data?.summary?.PM10.min.time}
                unit="µg./m3"
              />
            </div>
            <div className="ml-2 mr-2">
              <CardAverrage
                data={data?.summary?.PM10.avg.value}
                unit="µg./m3"
              />
            </div>
            <div className="w-[55vw] lg:w-[33vw] m-5 border-4 border-black rounded-[12] ">
              <StartLineChart title="PM 10" data={data?.dataPM10} />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="ml-2 mr-2 ">
              <CardMax
                data={data?.summary?.PM100.max.value}
                time={data?.summary?.PM100.max.time}
                unit="µg./m3"
              />
            </div>
            <div className="ml-2 mr-2">
              <CardMin
                data={data?.summary?.PM100.min.value}
                time={data?.summary?.PM100.min.time}
                unit="µg./m3"
              />
            </div>
            <div className="ml-2 mr-2">
              <CardAverrage
                data={data?.summary?.PM100.avg.value}
                unit="µg./m3"
              />
            </div>
            <div className="w-[55vw] lg:w-[33vw] m-5  border-4 border-black rounded-[12] ">
              <StartLineChart title="PM 100" data={data?.dataPM100} />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          {!!selectedDate && (
            <div>
              <TablePM date={selectedDate} data={data.tableData} unit={unit} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
