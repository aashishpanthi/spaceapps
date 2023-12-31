import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { NepalData } from "../../data/NepalData";
import { prediction } from "../../data/PredictedData";

function LineChart() {
  const [Data, setData] = useState({
    labels: prediction.map((data) => data.year),
    datasets: [
      {
        label: "Actual Emission",
        data: NepalData.map((data) => data.value),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
      {
        label: "Predicted Emission",
        data: prediction.map((data) => data.value),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "red",
        borderWidth: 2,
      },
    ],
  });
  return (
    <main className="flex flex-col items-center h-96 justify-center mt-24">
      {/* <div className="h-96 w-1 mx-auto"> */}
      <Line data={Data} />
      {/* </div> */}
      <h3 className="font-bold text-2xl mt-4">
        Carbon dioxide Emission : Predicted vs Actual
      </h3>

      {/* explain the x-asis and y-axis data */}

      <p className="text-center mt-2">
        <strong>x-axis:</strong> Year <br />
        <strong>y-axis:</strong> Carbon dioxide emission in kilotons
      </p>

      <p className="text-center mt-2 mb-24">
        This line chart shows Nepal's actual and predicted carbon dioxide
        emissions between 1960 AD and 2025 AD. The actual data is taken from the
        World Bank Open Data and the predicted data are calculated using the
        time series analysis.
      </p>
    </main>
  );
}

export default LineChart;
