import SideNav from "@/components/side-nav";
import CalendarButton from "@/components/calendar-button";

export default function CarbonMonoxide() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-56 p-1 rounded-b-md">
          Carbon Monoxide (CO)
        </div>
        <CalendarButton />
      </div>
    </div>
  );
}
