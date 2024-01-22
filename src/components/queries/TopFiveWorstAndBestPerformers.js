import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { BASE_URL } from "../../consts/urls";
import { chartColors } from "../../consts/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function TopFiveWorstAndBestPerformers() {
  const [labels, setLabels] = useState([]);
  const [percentChange, setPercentChange] = useState([]);

  useEffect(() => {
    async function getPerfomanceData() {
      // API Docs: https://github.com/aj-2000/autoapi
      const apiUrl = `${BASE_URL}/q4/`;
      // Error Handling by Try catch Block
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
            return obj.Brand;
          })
        );
        setPercentChange(
          chartData.map((obj) => {
            return obj["Percent Change"];
          })
        );
      } catch (e) {
        // will print error to console if something goes wrong
        console.error(e);
      }
    }
    getPerfomanceData();
  }, []);
  //chartJS chart options
  const options = {
    responsive: true,
    scales: {
      legend: {
        display: false, //This will do the task
      },
      yAxes: {
        title: {
          display: true,
          text: "Percent Change from previous yeaer sales",
          font: {
            size: 15,
          },
        },
        ticks: {
          precision: 0,
        },
      },
      xAxes: {
        title: {
          display: true,
          text: "Brand",
          font: {
            size: 15,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
    },
  };
  // chart data object
  const data = {
    labels,
    datasets: [
      {
        label: "Percentage Change",
        data: percentChange,
        backgroundColor: chartColors,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default TopFiveWorstAndBestPerformers;
