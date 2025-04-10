import CalendarButton from "@/components/calendar-button";
import { CardAverrage, CardMax, CardMin } from "@/components/card";
import StartLineChart from "@/components/chart";
import SideNav from "@/components/side-nav";

export default function Humidity() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-[95px] p-1 rounded-b-md border-double border-black">
          Humidity
        </div>

        <div className="grid grid-cols-3">
          <div className="m-5">
            <CardMax unit="%" />
          </div>
          <div className="m-5">
            <CardMin unit="%" />
          </div>
          <div className="m-5">
            <CardAverrage unit="%" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[50vw] m-2 border-4 border-black rounded-[12] ">
            <StartLineChart title=" Humidity" dataKey="pm1" color="#D68FD6" />
          </div>
        </div>
      </div>
      <CalendarButton />
    </div>
  );
}
