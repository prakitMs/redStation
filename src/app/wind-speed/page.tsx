import SideNav from "@/components/side-nav";

export default function WindSpeed() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-28 p-1 rounded-b-md">
          Wind Speed
        </div>
      </div>
    </div>
  );
}
