import { SIDE_MENU } from "@/constant/menuside";
import Link from "next/link";

const SideNav = () => {
  return (
    <div className="bg-[#38A3A5] h-[100vh] w-[15vw] px-4 flex flex-col ">
      <div className="">
        {SIDE_MENU.map(({ hasSub, subMenu, label, link }) => (
          <div className="text-[#ffffff]" key={label}>
            {hasSub ? (
              <div>
                <p className="text-[#d8dbcf] text-xl"> {label}</p>
                {subMenu?.map((sub) => (
                  <Link
                    key={sub.link}
                    href={sub.link ?? ""}
                    className="capitalize hover:bg-slate-500 hover:max-w-[12vw] hover:scale-110 rounded-md grid grid-flow-row pt-1 pl-2"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link href={link ?? ""} className="capitalize hover:underline">
                {label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
