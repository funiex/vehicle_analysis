import React from "react";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../consts/urls";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { chartColors, chartColorsV2 } from "../../consts/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

//Multi Type chart configurations
const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: false,
      text: "Chart.js Line Chart - Multi Axis",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
      title: {
        display: true,
        text: "Numbre of Cars Produced",
        font: {
          size: 15,
        },
      },
      ticks: {
        precision: 0,
      },
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: "Percent Change",
        font: {
          size: 15,
        },
      },
      ticks: {
        precision: 0,
      },
    },
  },
};

const GrowthOfPassengerCarsProductionInIndia = () => {
  const [productionValues, setProductionValues] = useState([]);
  const [percentChange, setPercentChange] = useState([]);
  //xAxes labels
  const [labels, setLabels] = useState([]);
  //get chart data from api call and setting to data
  useEffect(() => {
    async function getProductionData() {
      const apiUrl = `${BASE_URL}/q8`;
      // Error Handling By Try-Catch Block
      try {
        const response = await fetch(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const fetchedResponse = await response.json();
        const chartData = JSON.parse(fetchedResponse);
        setLabels(
          chartData.map((obj) => {
            return obj.Year;
          })
        );
        setProductionValues(
          chartData.map((obj) => {
            return obj["Value"];
          })
        );
        setPercentChange(
          chartData.map((obj) => {
            return obj["Percent Change"];
          })
        );
      } catch (e){
        // will print error to console if something goes wrong...
        console.error(e);
      }
      
    }
    getProductionData();
  }, []);
  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Percent Change from Previous Production",
        data: percentChange,
        borderColor: chartColorsV2[1],
        backgroundColor: chartColors[1],
        borderWidth: 2,
        yAxisID: "y1",
      },
      {
        type: "bar",
        label: "Numbre of Cars Produced",
        data: productionValues,
        borderColor: chartColorsV2[0],
        backgroundColor: chartColors[0],
        yAxisID: "y",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default GrowthOfPassengerCarsProductionInIndia;
