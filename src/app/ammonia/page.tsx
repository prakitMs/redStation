import SideNav from "@/components/side-nav";
import CalendarButton from "@/components/calendar-button";
import StartLineChart from "@/components/chart";
import { CardMax, CardMin, CardAverrage } from "@/components/card";

export default function Ammonia() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-40 p-1 rounded-b-md">
          Ammonia (NH<sub>3</sub>)
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
            <StartLineChart title="Ammonia" dataKey="pm1" />
          </div>
        </div>
      </div>
      <CalendarButton />
    </div>
  );
}
