import { Typography } from "@material-tailwind/react";
import React from "react";

function EmissionPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 mt-5">
      <h1 className="text-3xl font-bold text-gray-900">
        CO<sub>2</sub> Emission Analysis of Nepal from 1960 to 2022
      </h1>

      <div className="mt-4 ">
        <span className="inline-block bg-black px-3 py-1 text-sm font-semibold text-white mr-2">
          ...
        </span>
      </div>

      <div className="mt-4">
        <img
          src="/emission-in-nepal.jpeg"
          alt="Nepal's Co2 Emission"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default EmissionPage;
