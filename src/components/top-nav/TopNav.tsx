import { TOP_MENU } from "@/constant/menu";
import Link from "next/link";
import { MdAir } from "react-icons/md";

const TopNav = () => {
  return (
    <div className="bg-blue-300 w-full text-black px-4 py-2 flex flex-col md:flex-row items-center md:justify-between">
      <div className="flex items-center space-x-2">
        <MdAir className="w-8 h-8 md:w-10 md:h-10" />
        <p className="font-semibold text-xl md:text-2xl">Air Quality</p>
      </div>

      <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-2 md:mt-0">
        {TOP_MENU.map((menu) => (
          <Link
            href={menu.link}
            key={menu.label}
            className="capitalize hover:bg-[#3c83b3] px-2 py-1 rounded-md transition"
          >
            {menu.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
