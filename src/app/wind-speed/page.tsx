import CalendarButton from "@/components/calendar-button";
import StartLineChart from "@/components/chart";
import SideNav from "@/components/side-nav";
import StartTable from "@/components/tables";

export default function WindSpeed() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-32 p-1 rounded-b-md">
          Wind Speed
        </div>

        <div className="flex justify-center">
          <div className="w-[40vw] m-5 border-4 border-black rounded-[12]">
            <StartLineChart title="Wind Speed" dataKey="pm1" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="m-5 bg-slate-800 border-solid rounded-lg w-[70vw]">
            <StartTable />
          </div>
        </div>
      </div>
      <CalendarButton />
    </div>
  );
}
