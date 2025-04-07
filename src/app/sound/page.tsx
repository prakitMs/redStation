import CalendarButton from "@/components/calendar-button";
import StartLineChart from "@/components/chart";
import SideNav from "@/components/side-nav";

export default function Sound() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-32 p-1 rounded-b-md">
          Sound Level
        </div>
        <div className="flex justify-center">
          <div className="w-[40vw] m-5 border-4 border-black rounded-[12]">
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
