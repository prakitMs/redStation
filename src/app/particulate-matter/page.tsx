import CalendarButton from "@/components/calendar-button";
import SideNav from "@/components/side-nav";
import { Calendar } from "@/components/ui/calendar";

export default function PaticulateMatter() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-44 p-1 rounded-b-md">
          Paticulate Matter
        </div>
        <CalendarButton />
      </div>
    </div>
  );
}
