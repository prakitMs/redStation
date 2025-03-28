import { useGetDashboard } from "@/api/dashboard";
import Card from "@/components/card";
import Map from "@/components/map";

export default async function Dashboard() {
  const data = await useGetDashboard();
  console.log(data);
  return (
    <div className="h-screen bg-[#f0edeb]">
      <div className="grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          {data.pointData?.map((item, idx) => (
            <Map key={`${item.title}-${idx}`} {...item} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 mt-5 ">
          {data.dashboardData?.map((item, idx) => (
            <Card key={`${item.title}-${idx}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
