import SideNav from "@/components/side-nav";

export default function NitrogenDioxide() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1 ">
        <div className="text-xl text-black font-semibold bg-slate-200 w-[15vw] p-1 rounded-b-md">
          Nitrogen Dioxide (NO<sub>2</sub>)
        </div>
      </div>
    </div>
  );
}
