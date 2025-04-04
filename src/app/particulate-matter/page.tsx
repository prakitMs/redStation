import CalendarButton from "@/components/calendar-button";
import StartLineChart from "@/components/chart/StartLineChart";

import SideNav from "@/components/side-nav";

export default function PaticulateMatter() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-44 p-1 rounded-b-md border-double border-black">
          Paticulate Matter
        </div>
        <CalendarButton />
        <div className="grid grid-cols-2">
          <div className="grid m-5 w-[35vw] min-h-[200px] border-4 border-black rounded-[12] ">
            <StartLineChart dataKey="pm2.5" />
          </div>
          <div className="grid m-5 w-[35vw] min-h-[200px] border-4 border-black rounded-[12] ">
            <StartLineChart dataKey="pm10" />
          </div>
        </div>
      </div>
    </div>
  );
}
