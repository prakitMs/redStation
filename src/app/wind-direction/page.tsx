import CalendarButton from "@/components/calendar-button";
import { CardMax, CardAverrage, CardMin } from "@/components/card";
import StartLineChart from "@/components/chart";
import SideNav from "@/components/side-nav";

export default function WindDirect() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1">
        <div className="flex text-xl text-black font-semibold bg-slate-200 w-40 p-1 rounded-b-md">
          Wind Direction
        </div>

        <div className="grid grid-cols-3">
          <div className="m-5">
            <CardMax unit="W/m²" />
          </div>
          <div className="m-5">
            <CardMin unit="W/m²" />
          </div>
          <div className="m-5">
            <CardAverrage unit="W/m²" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[50vw] m-2 border-4 border-black rounded-[12]">
            <StartLineChart
              title="Wind Direction"
              dataKey="pm1"
              color="#ff006e"
            />
          </div>
        </div>
      </div>
      <CalendarButton />
    </div>
  );
}
