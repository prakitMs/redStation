import SideNav from "@/components/side-nav";

export default function WindDirect() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-[10vw] p-1 rounded-b-md">
          Wind Direction
        </div>
      </div>
    </div>
  );
}
