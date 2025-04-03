import SideNav from "@/components/side-nav";
import CalendarButton from "@/components/calendar-button";

export default function Ammonia() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-40 p-1 rounded-b-md">
          Ammonia (NH<sub>3</sub>)
        </div>

        <CalendarButton />
      </div>
    </div>
  );
}
