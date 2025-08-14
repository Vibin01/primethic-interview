import Image from "next/image";
import React from "react";

const Navbar = () => {
  const navItems = [
    "Home",
    "Employer",
    "Candidates",
    "Recruiters",
    "Features",
    "Resources",
    "Pricing",
    "Contact us",
  ];
  const getVisibleItems = (size: "md" | "xl" | "2xl") => {
    if (size === "md") return navItems.slice(0, 4);
    if (size === "xl") return navItems.slice(0, 6);
    return navItems; // 2xl
  };

  return (
    <nav className="flex items-center z-[999] justify-between px-8 py-4 bg-[#FFFFFF66] shadow-md">
      <div className="flex xl:w-1/5 items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={280}
          height={200}
          className="object-contain "
        />
      </div>

      {/* Menu */}
      <ul className="hidden xl:flex items-center justify-center gap-6 text-[#1B1C17] font-medium md:text-[24px] w-4/5">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`${
              index === 0
                ? "text-[#0668E1] border-b-4 border-[#0668E1] pb-1"
                : ""
            } hover:text-[#0668E1] cursor-pointer
              ${index > 4 ? "hidden 2xl:block" : ""}`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Auth Buttons */}
      <div className="flex gap-4 xl:w-0.5/5 text-[20px]">
        <button className="px-6 py-3 border border-blue-500 rounded-full text-blue-500">
          Login
        </button>
        <button className="px-6 py-3 font-semibold bg-[#0668E1] text-white rounded-full">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
