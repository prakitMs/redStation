"use client";

import { usePathname } from "next/navigation";
import { SIDE_MENU } from "@/constant/menuside";
import Link from "next/link";

const SideNav = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-teal-600  md:min-h-[1600px] lg:min-h-[1600px] w-80 px-4 py-4 flex flex-cols">
      <ul className="space-y-4">
        {SIDE_MENU.map(({ hasSub, subMenu, label, link }) => (
          <li key={label} className="text-white">
            {hasSub ? (
              <div>
                <p className="text-[#FFF4CA] text-xl">{label}</p>
                <ul className="pl-4 space-y-2">
                  {subMenu?.map((sub) => {
                    const isActive = pathname === ["/", sub.link].join("");
                    return (
                      <li key={sub.link}>
                        <Link
                          href={sub.link ?? ""}
                          className={`flex items-center gap-2 px-2 rounded-md transition duration-300 ${
                            isActive
                              ? "bg-slate-500 scale-110"
                              : "hover:bg-[#2C5A85] hover:scale-105"
                          }`}
                        >
                          {sub.icon && typeof sub.icon === "function" ? (
                            <sub.icon className="w-7 h-7 text-black" />
                          ) : sub.icon ? (
                            <img
                              src={`/icons/${sub.icon}`}
                              alt={sub.label}
                              className="w-7 h-7"
                            />
                          ) : null}

                          <span>{sub.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <Link
                href={link ?? ""}
                className={`block capitalize transition duration-200 ${
                  pathname === link ? "underline font-bold" : "hover:underline"
                }`}
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
