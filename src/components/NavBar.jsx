import React, { useState } from "react";

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
    <nav className="flex items-center justify-around space-x-10 pt-6 w-full">
      
      {/* LOGO */}
      <div className="">
        <h1 className="font-title text-gray-100 text-5xl select-none">Twain</h1>
      </div>

      {/* LINKS */}
      <div className="">
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
