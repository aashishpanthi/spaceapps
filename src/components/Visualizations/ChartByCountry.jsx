import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { findCountry } from "../../data/Countries";

const ChartByCountry = ({ country }) => {
  let countryData = findCountry(country);

  //   const [Data, setData] = useState({
  //     labels: countryData.map((data) => data.year),
  //     datasets: [
  //       {
  //         label: "Actual Emission",
  //         data: countryData.map((data) => data.value),
  //         backgroundColor: [
  //           "rgba(75,192,192,1)",
  //           "#ecf0f1",
  //           "#50AF95",
  //           "#f3ba2f",
  //           "#2a71d0",
  //         ],
  //         borderColor: "green",
  //         borderWidth: 2,
  //       },
  //     ],
  //   });
  return (
    <main className="flex w-screen justify-center">
      <div className="h-96  mx-auto">
        {/* <Line data={Data} /> */}
        skdjkf sdkfjl
      </div>
    </main>
  );
};

export default ChartByCountry;
