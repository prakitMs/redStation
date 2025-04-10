import CalendarButton from "@/components/calendar-button";
import { CardMax, CardAverrage, CardMin } from "@/components/card";
import StartLineChart from "@/components/chart";
import SideNav from "@/components/side-nav";

export default function SulferDioxide() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-48 p-1 rounded-b-md">
          Sulfur Dioxide (SO<sub>2</sub>)
        </div>

        <div className="grid grid-cols-3">
          <div className="m-5">
            <CardMax unit="ppm" />
          </div>
          <div className="m-5">
            <CardMin unit="ppm" />
          </div>
          <div className="m-5">
            <CardAverrage unit="ppm" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[50vw] m-2 border-4 border-black rounded-[12]">
            <StartLineChart title="Sulfur Dioxide" dataKey="pm1" />
          </div>
        </div>
      </div>
      <CalendarButton />
    </div>
  );
}
