"use client";
import { useGetDefaultData } from "@/api/get-data-graph";
import { useGetDataTable } from "@/api/get-data-table";
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

export default function Humidity() {
  const [selectedDate, setSelectedDate] = useState<DateRange | undefined>(
    undefined
  );
  const [selectedTimeInterval, setSelectedTimeInterval] =
    useState<string>("1h");
  const [selectedDevice, setSelecteddDevice] = useState<string>("RedStation");
  const { data, isLoading } = useGetDefaultData({
    date: selectedDate,
    type: "Humidity",
    timeSelect: selectedTimeInterval,
    device: selectedDevice,
  });
  const unit = "ppm";
  const title = "Humidity";

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
        <div className="text-xl text-black font-semibold bg-slate-200 w-[95px] p-1 rounded-b-md border-double border-black">
          Humidity
        </div>
        <div>Data from {selectedDevice}</div>

        <div className="flex justify-end gap-4 ">
          <div className="">
            <DeviceSelection
              onChange={(device) => setSelecteddDevice(device)}
            />
          </div>
          <div className="">
            <CalendarButton onChange={(date) => setSelectedDate(date)} />
          </div>

          <TimeIntervalSelection
            onChange={(timeInterval) => setSelectedTimeInterval(timeInterval)}
          />
        </div>

        <div className="grid grid-cols-3">
          <div className=" md:m-0 lg:m-5">
            <CardMax
              data={data?.summary?.max.value as number}
              unit="ppm"
              time={data?.summary?.max.time as string}
            />
          </div>
          <div className=" md:m-0 lg:m-5">
            <CardMin
              data={data?.summary?.min.value as number}
              unit="ppm"
              time={data?.summary?.min.time as string}
            />
          </div>
          <div className=" md:m-0 lg:m-5">
            <CardAverrage
              data={data?.summary?.avg.value as number}
              unit="ppm"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mt-2 md:m-2 border-4 border-black rounded-[12] ">
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
