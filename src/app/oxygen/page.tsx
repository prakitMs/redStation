import SideNav from "@/components/side-nav";

export default function Oxygen() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-28 p-1 rounded-b-md">
          Oxygen(O<sub>2</sub>)
        </div>
      </div>
    </div>
  );
}
