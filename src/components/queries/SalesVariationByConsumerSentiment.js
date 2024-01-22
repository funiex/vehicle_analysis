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
//chart configurations
const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,

  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
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
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: "Consumer Sentiment",
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

const SalesVariationByConsumerSentiment = () => {
  const [sales, setSales] = useState([]);
  const [consumerSentiment, setConsumerSentiment] = useState([]);
  // xAxes dates
  const [labels, setLabels] = useState([]);
  useEffect(() => {
    async function getChartData() {
      // API DOCS: https://github.com/aj-2000/autoapi
      const apiUrl = `${BASE_URL}/q9`;
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
        setLabels(Object.values(chartData["Date"]));
        setSales(Object.values(chartData["Total Sales"]));
        setConsumerSentiment(Object.values(chartData["Consumer Sentiment"]));
      } catch (error) {
        //will print error to console if something goes wrong
        console.error(error);
      }
    }
    getChartData();
  }, []);
  // chart data object
  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: sales,
        borderColor: chartColorsV2[0],
        backgroundColor: chartColors[0],
        yAxisID: "y",
      },
      {
        label: "Consumer Sentiment",
        data: consumerSentiment,
        borderColor: chartColorsV2[1],
        backgroundColor: chartColors[1],
        yAxisID: "y1",
      },
    ],
  };
  // chartJs line chart
  return <Line options={options} data={data} />;
};

export default SalesVariationByConsumerSentiment;
