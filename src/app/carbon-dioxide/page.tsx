"use client";

import { useGetDefaultData } from "@/api/get-data-graph";
import { AlertNotFound } from "@/components/alert";
import CalendarButton from "@/components/calendar-button";
import { CardAverrage, CardMax, CardMin } from "@/components/card";
import StartLineChart from "@/components/chart";
import { TimeIntervalSelection } from "@/components/selector";
import { DeviceSelection } from "@/components/selector/DeviceSelection";
import SideNav from "@/components/side-nav";
import { StartTable } from "@/components/tables";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function CarbonDioxide() {
  const [selectedDate, setSelectedDate] = useState<DateRange | undefined>(
    undefined
  );
  const [selectedTimeInterval, setSelectedTimeInterval] =
    useState<string>("1h");
  const [selectedDevice, setSelecteddDevice] = useState<string>("RedStation");

  const { data, isLoading } = useGetDefaultData({
    date: selectedDate,
    type: "CO2",
    timeSelect: selectedTimeInterval,
    device: selectedDevice,
  });

  const unit = "ppm";
  const title = "Carbon Dioxide";

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
  if (!data?.data?.length) {
    return <AlertNotFound />;
  }
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-52 p-1 rounded-b-md border-double border-black">
          Carbon Dioxide (CO<sub>2</sub>)
        </div>
        <div>Data from {selectedDevice}</div>

        <div className="flex justify-end gap-2 z-50">
          <div className="z-50">
            <DeviceSelection
              onChange={(device) => setSelecteddDevice(device)}
            />
          </div>

          <div>
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
          <div className="m-3 border-4 border-black rounded-[12]  ">
            <StartLineChart title={title} data={data.formatData} />
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
