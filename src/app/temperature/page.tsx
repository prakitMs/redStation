import CalendarButton from "@/components/calendar-button";
import { CardAverrage, CardMax, CardMin } from "@/components/card";
import StartLineChart from "@/components/chart";
import SideNav from "@/components/side-nav";

export default function Temperature() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-32 p-1 rounded-b-md">
          Temperature
        </div>
        <div className="grid grid-cols-3">
          <div className="m-5">
            <CardMax unit="°C" />
          </div>
          <div className="m-5">
            <CardMin unit="°C" />
          </div>
          <div className="m-5">
            <CardAverrage unit="°C" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[50vw] m-2 border-4 border-black rounded-[12]">
            <StartLineChart
              title=" Temperature"
              dataKey="pm2.5"
              color="#023e8a"
            />
          </div>
        </div>
      </div>
      <CalendarButton />
    </div>
  );
}
