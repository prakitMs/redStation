import { useGetDashboard } from "@/api/dashboard";
import Card from "@/components/card";
import Map from "@/components/map";

export default async function Dashboard() {
  const data = await useGetDashboard();

  return (
    <div className="h-screen">
      <div className="grid lg:grid-cols-3">
        <div className="lg:col-span-2 ">
          {data.pointData?.map((item, idx) => (
            <Map key={`${item.title}-${idx}`} {...item} />
          ))}
        </div>
        <div className="grid grid-cols-5 ml-2 mt-2 lg:absolute lg:-bottom-5 lg:left-0 lg:w-full">
          {[
            { label: "Very Good", color: "bg-[#3EE3E6]" },
            { label: "Good", color: "bg-[#42C266]" },
            { label: "Bad", color: "bg-[#EBE65D]" },
            { label: "Very Bad", color: "bg-[#EC8739]" },
            { label: "Dangerous", color: "bg-[#F74848]" },
          ].map(({ label, color }, index) => (
            <div
              key={index}
              className={`${color} w-full sm:w-[20vw] h-[5vh] flex justify-center items-center`}
            >
              {label}
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 mt-5 md:mt-5 italic  font-bold">
          {data.dashboardData?.map((item, idx) => (
            <Card key={`${item.title}-${idx}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
