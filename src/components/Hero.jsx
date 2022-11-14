import React from "react";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
        {/* TITLE */}
        <div>
          <h1 className="max-w-[360px] sm:max-w-md md:max-w-xl lg:max-w-2xl font-body text-center text-gray-50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-8">
            CELEBRATING THE HISTORY OF MIDWESTERN CUISINE
          </h1>
        </div>
        {/* ADDRESS */}
        <p className="text-gray-50 lg:text-2xl md:text-xl text-base ">Lorem ipsum dolor sit amet consectetur.</p>
        
    </div>
  );
};
