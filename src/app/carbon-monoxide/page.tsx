import SideNav from "@/components/side-nav";
import CalendarButton from "@/components/calendar-button";
import StartLineChart from "@/components/chart";

export default function CarbonMonoxide() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-56 p-1 rounded-b-md">
          Carbon Monoxide (CO)
        </div>

        <div className="flex justify-center">
          <div className="w-[40vw] m-5 border-4 border-black rounded-[12]">
            <StartLineChart
              title=" Carbon Monoxide"
              dataKey="pm10"
              color="#2a9d8f"
            />
          </div>
        </div>
      </div>
      <CalendarButton />
    </div>
  );
}
