import CalendarButton from "@/components/calendar-button";
import SideNav from "@/components/side-nav";

export default function Sound() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-32 p-1 rounded-b-md">
          Sound Level
        </div>
        <CalendarButton />
      </div>
    </div>
  );
}
