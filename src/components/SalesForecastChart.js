// Line chart plotted with forecasted values
import React from "react";
import { useState, useEffect } from "react";

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
import { chartColors, chartColorsV2 } from "../consts/colors";
import unixTimeStampToDate from "../utility/UnixTimeStampToDate";
import { BASE_URL } from "../consts/urls";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Line Chart Configurations
const options = {
  scales: {
    yAxes: {
      title: {
        display: true,
        text: "Sales",
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
        text: "Next Datapoints",
        font: {
          size: 15,
        },
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "SALES FORECASTING by TIME SERIES ANALYSIS (AMIRA MODEL)",
    },
  },
};

const SalesForecastChart = (props) => {
  const [forecastedValues, setForecastedValues] = useState([]);
  //Next Datapoints (Days/Months/Year etc.) (Depends on Dataset)
  const [labels, setLabels] = useState([]);
  // Fetching the forecasts from autoapi forecast api endpoint
  // API Docs: https://github.com/aj-2000/autoapi
  //Configured ForecastAPI URL
  const apiUrl = `${BASE_URL}/forecast/${props.pValue}/${props.qValue}/${props.numberOfForecasts}/3`;
  useEffect(() => {
    async function getForecastData() {
      //CSV file url from input field(sent by parend SalesForecast Component)
      // Fetching the forecasts from autoapi forecast api endpoint
      const fileURL = props.fileURL;
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //Convering Fileurl from Input field to JSON string
        body: JSON.stringify({ file_url: fileURL }),
      };
      try {
        const response = await fetch(apiUrl, requestOptions);
        const fetchedResponse = await response.json();
        const forecastData = JSON.parse(fetchedResponse);
        // AutoAPI forecast send next data points as Unix timestamp(in milliseconds)
        // so converting them to dates in DD/MM/YYYY format
        setLabels(
          Object.keys(JSON.parse(forecastData["FORECAST"])).map(
            (unixTimeStamp) => unixTimeStampToDate(parseInt(unixTimeStamp))
          )
        );
        setForecastedValues(
          Object.values(JSON.parse(forecastData["FORECAST"]))
        );
      } catch (e) {
        //will print error to console if something goes wrong
        console.error(e);
      }
    }
    getForecastData();
  }, [ apiUrl, props.updateModelAccuracyChart]);
  // ChartJS Line Chart Data Object
  const data = {
    labels,
    datasets: [
      {
        label: "FORECASTED VALUES",
        data: forecastedValues,
        borderColor: chartColorsV2[0],
        backgroundColor: chartColors[0],
      },
    ],
  };
  // ChartJS Line Chart
  return <Line options={options} data={data} />;
};

export default SalesForecastChart;
