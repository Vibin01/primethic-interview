import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center z-[999] justify-between px-8 py-4 bg-[#FFFFFF66] shadow-md">
      {/* Logo */}

      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={280}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex md:text-[24px] gap-6 text-[#1B1C17] font-medium">
        <li className="text-[#0668E1] border-b-4 border-[#0668E1] pb-1">
          Home
        </li>
        <li>Employer</li>
        <li>Candidates</li>
        <li>Recruiters</li>
        <li>Features</li>
        <li>Resources</li>
        <li>Pricing</li>
        <li>Contact us</li>
      </ul>

      {/* Auth Buttons */}
      <div className="flex gap-4 text-[20px]">
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
