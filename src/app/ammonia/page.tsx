import SideNav from "@/components/side-nav";
import CalendarButton from "@/components/calendar-button";
import StartLineChart from "@/components/chart";

export default function Ammonia() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-40 p-1 rounded-b-md">
          Ammonia (NH<sub>3</sub>)
        </div>
        <div className="flex justify-center">
          <div className="w-[40vw] m-5 border-4 border-black rounded-[12]">
            <StartLineChart title="Ammonia" dataKey="pm1" />
          </div>
        </div>
      </div>
      <CalendarButton />
    </div>
  );
}
