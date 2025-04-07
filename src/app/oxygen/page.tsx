import CalendarButton from "@/components/calendar-button";
import StartLineChart from "@/components/chart";
import SideNav from "@/components/side-nav";

export default function Oxygen() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-24 p-1 rounded-b-md border-double border-black">
          Oxygen
        </div>

        <div className="flex justify-center">
          <div className="w-[40vw] m-5  border-4 border-black rounded-[12] ">
            <StartLineChart title="PM2.5" dataKey="pm2.5" />
          </div>
        </div>
      </div>
      <CalendarButton />
    </div>
  );
}
