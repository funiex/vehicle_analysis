import { BASE_URL } from "../../consts/urls";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { chartColors } from "../../consts/colors";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

function RelationshipBetweenPriceAndMileage() {
  //Intializiation of States
  const [dataManual, setDataManual] = useState([]);
  const [dataAutomatic, setDataAutomatic] = useState([]);
  //Fetching Data
  useEffect(() => {
    async function getDataManual() {
      //using query one with option 2 of auto api
      // API docs: https://github.com/aj-2000/autoapi
      const apiUrl = `${BASE_URL}/q1/2`;
      const response = await fetch(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const fetchedResponse = await response.json();
      const chartData = JSON.parse(fetchedResponse);
      const mileageManual = Object.values(chartData["Mileage Km/L"]);
      const priceManual = Object.values(chartData["Price"]);
      //converting series to array of {x,y} pair (Data format req. by ChartJS scatter chart)
      let data = [];
      for (let i = 0; i < priceManual.length; i++) {
        data.push({ x: priceManual[i], y: mileageManual[i] });
      }
      setDataManual(data);
    }
    async function getDataAutomatic() {
      //using query one with option 1 of auto api
      // API docs: https://github.com/aj-2000/autoapi
      const apiUrl = `${BASE_URL}/q1/1`;
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
        const mileageAutomatic = Object.values(chartData["Mileage Km/L"]);
        const priceAutomatic = Object.values(chartData["Price"]);
        //converting series to array of {x,y} pair (Data format req. by ChartJS scatter chart)
        let data = [];
        for (let i = 0; i < priceAutomatic.length; i++) {
          data.push({ x: priceAutomatic[i], y: mileageAutomatic[i] });
        }
        setDataAutomatic(data);
      } catch (error) {
        //will print error to console if something goes wrong...
        console.error(error);
      }
    }
    getDataManual();
    getDataAutomatic();
  }, []);

  //Configuring Scatter Chart
  const options = {
    scales: {
      yAxes: {
        title: {
          display: true,
          text: "Mileage(in KM/L)",

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
          text: "Price(in Lakhs)",
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
  //Data For Chart

  const data = {
    datasets: [
      {
        label: "Manual",
        data: dataManual,
        backgroundColor: chartColors[0],
      },
      {
        label: "Automatic",
        data: dataAutomatic,
        backgroundColor: chartColors[1],
      },
    ],
  };

  return <Scatter options={options} data={data} />;
}

export default RelationshipBetweenPriceAndMileage;
