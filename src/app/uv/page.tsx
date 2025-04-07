"use client";
import CalendarButton from "@/components/calendar-button";
import StartLineChart from "@/components/chart";
import SideNav from "@/components/side-nav";

export default function Ultraviolet() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-40 p-1 rounded-b-md">
          Ultraviolet(UV)
        </div>
        <div className="flex justify-center">
          <div className="w-[40vw] m-5 border-4 border-black rounded-[12] ">
            <StartLineChart title="Ultraviolet" dataKey="pm1" />
          </div>
        </div>
      </div>
      <CalendarButton />
    </div>
  );
}
