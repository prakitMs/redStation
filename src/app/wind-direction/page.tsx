import CalendarButton from "@/components/calendar-button";
import SideNav from "@/components/side-nav";

export default function WindDirect() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1">
        <div className="flex text-xl text-black font-semibold bg-slate-200 w-40 p-1 rounded-b-md">
          Wind Direction
        </div>
        <CalendarButton />
      </div>
    </div>
  );
}
