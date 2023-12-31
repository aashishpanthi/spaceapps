import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { getOneCountryData } from "../../data/Countries";

const ChartByCountry = ({
  country = JSON.parse(localStorage.getItem("country")).name,
}) => {
  // useEffect(() => {

  let yearArr = [];
  let valuesArr = [];
  const [yArray, setYArray] = useState(yearArr);
  const [vArray, setVArray] = useState(valuesArr);
  useEffect(() => {
    let countryData = getOneCountryData(country);
    let values = countryData.value;

    for (let year in values) {
      yearArr.push(year);
    }
    setYArray(yearArr);
    for (let year in values) {
      valuesArr.push(values[year]);
    }
    setVArray(valuesArr);
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
    <main className="flex relative max-w-4xl mx-auto flex-col items-center min-h-96 justify-center mt-12">
      {/* <div className="h-96  mx-auto"> */}
      <Line data={Data} />
      {/* skdjkf sdkfjl */}
      {/* </div> */}
      <h3 className="font-bold text-2xl mt-4">
        Carbon dioxide Emission : For {country}
      </h3>

      <p className="text-center mt-2">
        <strong>x-axis:</strong> Year <br />
        <strong>y-axis:</strong> Carbon dioxide emission in kilotons
      </p>

      <p className="text-center mt-2 mb-4">
        This line chart shows the carbon dioxide emission of {country} from 1960
        to 2022. The actual data is taken from World Bank Open Data and the
        predicted data is calculated using the time series analysis.
      </p>
    </main>
  );
};

export default ChartByCountry;
