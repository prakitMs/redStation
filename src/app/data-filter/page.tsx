"use client";
import { useGetDashboard } from "@/api/dashboard";
import { MultipleMapMarker } from "@/components/map";
import { DeviceSelection } from "@/components/selector/DeviceSelection";

export default function DataFilter() {
  const { data } = useGetDashboard();
  return (
    <div>
      <div className="">
        <DeviceSelection />
      </div>
      <div className="grid lg:grid-cols-3">
        <div className="lg:col-span-1 mt-2">
          <MultipleMapMarker
            className="lg:min-h-[20vh] lg:h-[70vh]"
            data={data.formatMapData as any}
          />
          <div className="grid grid-cols-5 ml-2 w-[33vw]">
            {[
              { label: "Very Good", color: "bg-[#3EE3E6]" },
              { label: "Good", color: "bg-[#42C266]" },
              { label: "Bad", color: "bg-[#EBE65D]" },
              { label: "Very Bad", color: "bg-[#EC8739]" },
              { label: "Dangerous", color: "bg-[#F74848]" },
            ].map(({ label, color }, index) => (
              <div
                key={index}
                className={`${color}  sm:w-[10vw] lg:w-full h-[5vh] flex justify-center items-center mt-2`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2"> </div>
      </div>
    </div>
  );
}
