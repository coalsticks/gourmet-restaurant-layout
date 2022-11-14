import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { DropDownMenu } from "./DropDownMenu";

const navLinks = [
  { text: "home", href: "#" },
  { text: "reservations", href: "#" },
  { text: "menu", href: "#" },
  { text: "order online", href: "#" },
  { text: "twain brunch", href: "#" },
  { text: "private dining", href: "#" },
  { text: "visit", href: "#" },
  { text: "contact", href: "#" },
];

export const NavBar = () => {
  return (
    <nav className="flex items-center lg:bg-transparent bg-black/[.70] lg:justify-around justify-between space-x-10 lg:pt-6 p-3 w-full ">
      {/* LOGO */}
      <div className="flex">
        <h1 className="font-title text-gray-100 text-5xl select-none">Twain</h1>
      </div>
      {/* MEDIUM SCREENS NAVIGATION */}
      <div className="lg:hidden ">
        <DropDownMenu menuBtn={<Bars3Icon className="h-8 w-8 fill-white" />} menuData={navLinks} />
      </div>
      {/* LINKS */}
      <div className="lg:block hidden">
        <ul className="flex space-x-12">
          {navLinks.map((el) => (
            <li key={el.text}>
              {" "}
              <a
                href={el.href}
                className="hover:text-red-400 hover:transition-all hover:duration-500 text-gray-100 cursor-pointer text-xs uppercase font-sans font-medium select-none"
              >
                {el.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
