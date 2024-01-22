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

function SalesVolumesComparisonOfTopTenBrands() {
  //Brands
  const [labels, setLabels] = useState([]);
  //2019
  const [yearOneSales, setYearOneSales] = useState([]);
  //2020
  const [yearTwoSales, setYearTwoSales] = useState([]);

  useEffect(() => {
    // API DOCS: https://github.com/aj-2000/autoapi
    async function getChartData() {
      const apiUrl = `${BASE_URL}/q3/`;
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
        setLabels(Object.values(chartData.Brand));
        setYearOneSales(Object.values(chartData["2019 sales"]));
        setYearTwoSales(Object.values(chartData["2020 sales"]));
      } catch (error) {
        //will print error to console if something goes wrong
        console.error(error);
      }
    }
    getChartData();
  }, []);
  const options = {
    responsive: true,
    scales: {
      yAxes: {
        title: {
          display: true,
          text: "Sales Volume",
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
      },
    },
  };
  // ChartJS chart Data Object
  const data = {
    labels,
    datasets: [
      {
        label: "2019 Sales",
        data: yearOneSales,
        backgroundColor: chartColors[0],
      },
      {
        label: "2020 Sales",
        data: yearTwoSales,
        backgroundColor: chartColors[1],
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default SalesVolumesComparisonOfTopTenBrands;
