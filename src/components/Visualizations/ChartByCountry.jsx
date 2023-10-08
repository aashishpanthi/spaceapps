import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { getOneCountryData } from "../../data/Countries";

const ChartByCountry = ({ country }) => {
  // useEffect(() => {

  let yearArr = [];
  let valuesArr = [];
  useEffect(() => {
    let countryData = getOneCountryData(country);
    let values = countryData.value;

    for (let year in values) {
      yearArr.push(year);
    }
    for (let year in values) {
      valuesArr.push(values[year]);
    }
    console.log(yearArr, valuesArr);
    // });
  }, [country]);
  const [Data, setData] = useState({
    labels: yearArr,
    datasets: [
      {
        label: "Year",
        data: valuesArr,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "green",
        borderWidth: 2,
      },
    ],
  });
  return (
    <main className="flex w-screen relative -left-64 flex-col items-center h-96 justify-center">
      {/* <div className="h-96  mx-auto"> */}
      <Line data={Data} />
      {/* skdjkf sdkfjl */}
      {/* </div> */}
      <h3 className="font-bold text-2xl mt-4">
        Carbon dioxide Emission : For {country}
      </h3>
    </main>
  );
};

export default ChartByCountry;
