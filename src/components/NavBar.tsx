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
    <nav className="flex items-center justify-center space-x-10 px-40 pt-6 w-full relative">
      
      {/* LOGO */}
      <div className="flex  m-auto">
        <h1 className="font-title text-gray-100 text-4xl select-none">Twain</h1>
      </div>

      {/* LINKS */}
      <div className="">
        <ul className="flex space-x-12">
          {navLinks.map((el) => (
            <li key={el.text}>
              {" "}
              <a
                href={el.href}
                className="hover:text-red-400 text-gray-100 cursor-pointer text-xs uppercase font-sans font-medium select-none"
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
