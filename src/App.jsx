import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import chef_meal from "./assets/images/chef_meal.jpg";

export default function App() {
  return (
    <div className="h-screen w-screen relative">
      <div className="w-screen h-screen absolute">
        <img src={chef_meal} className="h-full w-full absolute" />
        <div className="bg-gray-900 h-full opacity-50 relative"></div>
      </div>
      <p className="flex justify-start bg-gray-900 text-gray-100 text-sm p-4 relative">
        A Big Midwestern Heart in the Heart of the Midwest
      </p>

      <NavBar />
      <Hero />
    </div>
  );
}
