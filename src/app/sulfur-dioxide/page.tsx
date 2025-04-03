import CalendarButton from "@/components/calendar-button";
import SideNav from "@/components/side-nav";
import { PiCalendarDotBold } from "react-icons/pi";

export default function SulferDioxide() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-48 p-1 rounded-b-md">
          Sulfur Dioxide (SO<sub>2</sub>)
        </div>
        <CalendarButton />
      </div>
    </div>
  );
}
