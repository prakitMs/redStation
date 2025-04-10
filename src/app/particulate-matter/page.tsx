import CalendarButton from "@/components/calendar-button";
import { CardMax, CardMin, CardAverrage } from "@/components/card";
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

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-4">
          <div className="grid grid-cols-3">
            <div className="ml-2 mr-2 ">
              <CardMax unit="µg./m3" />
            </div>
            <div className="ml-2 mr-2">
              <CardMin unit="µg./m3" />
            </div>
            <div className="ml-2 mr-2">
              <CardAverrage unit="µg./m3" />
            </div>
            <div>
              <div className="w-[55vw] lg:w-[33vw] m-5 border-4 border-black rounded-[12] ">
                <StartLineChart title="PM 1.0" dataKey="pm1" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="ml-2 mr-2">
              <CardMax unit="µg./m3" />
            </div>
            <div className="ml-2 mr-2">
              <CardMin unit="µg./m3" />
            </div>
            <div className="ml-2 mr-2">
              <CardAverrage unit="µg./m3" />
            </div>
            <div className="w-[55vw]  lg:w-[33vw] m-5  border-4 border-black rounded-[12] ">
              <StartLineChart title="PM 2.5" dataKey="pm2.5" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="grid grid-cols-3">
            <div className="ml-2 mr-2">
              <CardMax unit="µg./m3" />
            </div>
            <div className="ml-2 mr-2">
              <CardMin unit="µg./m3" />
            </div>
            <div className="ml-2 mr-2">
              <CardAverrage unit="µg./m3" />
            </div>
            <div className="w-[55vw] lg:w-[33vw] m-5 border-4 border-black rounded-[12] ">
              <StartLineChart title="PM 10" dataKey="pm10" />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="ml-2 mr-2">
              <CardMax unit="µg./m3" />
            </div>
            <div className="ml-2 mr-2">
              <CardMin unit="µg./m3" />
            </div>
            <div className="ml-2 mr-2">
              <CardAverrage unit="µg./m3" />
            </div>
            <div className="w-[55vw] lg:w-[33vw] m-5  border-4 border-black rounded-[12] ">
              <StartLineChart title="PM 100" dataKey="pm2.5" />
            </div>
          </div>
        </div>
      </div>
      <CalendarButton />
    </div>
  );
}
