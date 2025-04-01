import SideNav from "@/components/side-nav";

export default function () {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-[14vw] p-1 rounded-b-md">
          Carbon Dioxide(CO<sub>2</sub>)
        </div>
      </div>
    </div>
  );
}
