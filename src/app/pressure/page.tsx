import CalendarButton from "@/components/calendar-button";
import SideNav from "@/components/side-nav";

export default function Pressure() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-[90px] p-1 rounded-b-md">
          Pressure
        </div>
        <CalendarButton />
      </div>
    </div>
  );
}
