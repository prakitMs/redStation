"use client";

import { useGetDashboard } from "@/api/dashboard";
import { CardDashboard } from "@/components/card";

import { MultipleMapMarker } from "@/components/map";
import { MultiMapProps } from "@/components/map/MultipleMapMarker";
import { formatDateToThai } from "@/components/utils/format";

export default function Dashboard() {
  const { data } = useGetDashboard();
  console.log({ data });

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
    <div className="h-screen">
      <div className="flex justify-end">
        <div className="w-48 rounded-bl-lg bg-[#DEB841] mb-2 p-2 font-bold">
          {formatDateToThai(data.data?.[0].time)}
        </div>
      </div>
      <div className="grid lg:grid-cols-3">
        {/* <div className="lg:col-span-3">
          <Map {...data.mapData} />
        </div> */}
        <div className="lg:col-span-3">
          <MultipleMapMarker data={data.formatMapData as any} />
        </div>

        <div className="grid grid-cols-5 ml-2  lg:absolute lg:-bottom-5 lg:left-0 lg:w-full">
          {[
            { label: "Very Good", color: "bg-[#3EE3E6]" },
            { label: "Good", color: "bg-[#42C266]" },
            { label: "Bad", color: "bg-[#EBE65D]" },
            { label: "Very Bad", color: "bg-[#EC8739]" },
            { label: "Dangerous", color: "bg-[#F74848]" },
          ].map(({ label, color }, index) => (
            <div
              key={index}
              className={`${color} w-full sm:w-[20vw] h-[5vh] flex justify-center items-center`}
            >
              {label}
            </div>
          ))}
        </div>
        {/* <div className="grid md:grid-cols-2 mt-5 md:mt-5 italic  font-bold">
          <CardDashboard {...data.airQuantity} />
          <CardDashboard {...data.environment} />
          <CardDashboard {...data.gas} />
          <CardDashboard {...data.weather} />
        </div> */}
      </div>
    </div>
  );
}
