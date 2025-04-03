import { TOP_MENU } from "@/constant/menu";
import Link from "next/link";
import { MdAir } from "react-icons/md";

const TopNav = () => {
  return (
    <div className="bg-blue-300 h-10 md:h-15 lg:h-16 w-screen text-black px-4 flex items-center">
      <MdAir className="w-12 h-12" />
      <p className="font-semibold text-[24px] ">Air Quality</p>
      <div className="ml-auto flex space-x-6 p-2">
        {TOP_MENU.map((menu) => (
          <Link
            href={menu.link}
            key={menu.label}
            className="capitalize hover:bg-[#3c83b3] hover:p-1 hover:rounded-xl"
          >
            {menu.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
