import React from "react";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
        {/* TITLE */}
        <div>
          <h1 className="max-w-3xl font-body text-center text-gray-50 text-6xl pb-8">
            CELEBRATING THE HISTORY OF MIDWESTERN CUISINE
          </h1>
        </div>
        {/* ADDRESS */}
        <p className="text-gray-50 text-2xl">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );
};
