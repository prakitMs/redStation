"use client";

import { usePathname } from "next/navigation";
import { SIDE_MENU } from "@/constant/menuside";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const SideNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className="md:hidden p-2 fixed top-4 left-4 z-10 bg-gray-300 rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
      </button>

      <nav
        className={`
          fixed top-0 left-0 h-full w-64 bg-gray-300 px-4 py-6 z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:block md:w-64 md:min-h-[3000px]
        `}
      >
        <ul className="space-y-6">
          {SIDE_MENU.map(({ hasSub, subMenu, label, link }) => (
            <li key={label} className="text-black">
              {hasSub ? (
                <div>
                  <p className="text-black text-lg font-semibold">{label}</p>
                  <ul className="pl-4 space-y-3">
                    {subMenu?.map((sub) => {
                      const isActive = pathname === `/${sub.link}`;
                      return (
                        <li key={sub.link}>
                          <Link
                            href={sub.link ?? ""}
                            className={`flex items-center gap-2 px-2 py-1 rounded-md transition ${
                              isActive
                                ? "bg-slate-500 scale-105"
                                : "hover:bg-[#2C5A85] hover:scale-105"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.icon && typeof sub.icon === "function" ? (
                              <sub.icon className="w-6 h-6 text-black" />
                            ) : sub.icon ? (
                              <img
                                src={`/icons/${sub.icon}`}
                                alt={sub.label}
                                className="w-6 h-6"
                              />
                            ) : null}
                            <span className="text-sm">{sub.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <Link
                  href={link ?? ""}
                  className={`block text-base capitalize transition ${
                    pathname === link
                      ? "underline font-bold"
                      : "hover:underline"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Background overlay on mobile when sidebar open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default SideNav;
