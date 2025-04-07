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

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="grid m-5  border-4 border-black rounded-[12] ">
            <StartLineChart title="PM2.5" dataKey="pm2.5" />
          </div>
          <div className="grid m-5  border-4 border-black rounded-[12] ">
            <StartLineChart title="PM10" dataKey="pm10" />
          </div>
          <div className="grid m-5  border-4 border-black rounded-[12] ">
            <StartLineChart title="PM2.5" dataKey="pm2.5" />
          </div>
          <div className="grid m-5  border-4 border-black rounded-[12] ">
            <StartLineChart title="PM10" dataKey="pm10" />
          </div>
        </div>
      </div>
      <CalendarButton />
    </div>
  );
}
