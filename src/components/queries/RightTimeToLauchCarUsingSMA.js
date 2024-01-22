import React, { useState, useEffect } from "react";
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
import Button from "@mui/material/Button";
import { Line } from "react-chartjs-2";
import { MONTHS_LIST } from "../../consts/arrays";
import {Box} from "@mui/material";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { BASE_URL } from "../../consts/urls";
import { chartColors, chartColorsV1, chartColorsV2 } from "../../consts/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

//Prediction Modal Styles
// Docs: https://mui.com/material-ui/react-modal/
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 10,
  p: 4,
};
//Prediction Modal Styled Components
const ModalTitle = styled.p`
  text-align: center;
`;
const Subtitle = styled.p``;
const ModalItem = styled.div``;
const Month = styled.div``;
const InfoContainer = styled.div``;

function RightTimeToLauchCarUsingSMA() {
  //Prediction Modal States
  // Docs: https://mui.com/material-ui/react-modal/
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Chart Data
  const [labels, setLabels] = useState([]);
  const [economy, setEconomy] = useState([]);
  const [luxury, setLuxury] = useState([]);
  const [midRange, setMidRange] = useState([]);
  const [ultraLuxury, setUltraLuxury] = useState([]);
  const [economySMA, setEconomySMA] = useState([]);
  const [luxurySMA, setLuxurySMA] = useState([]);
  const [midRangeSMA, setMidRangeSMA] = useState([]);
  const [ultraLuxurySMA, setUltraLuxurySMA] = useState([]);
  const [economyDiff, setEconomyDiff] = useState([]);
  const [luxuryDiff, setLuxuryDiff] = useState([]);
  const [midRangeDiff, setMidRangeDiff] = useState([]);
  const [ultraLuxuryDiff, setUltraLuxuryDiff] = useState([]);
  const [monthsPrediction, setMonthsPrediction] = useState([]);

  useEffect(() => {
    async function getAnalysisData() {
      // API Docs: https://github.com/aj-2000/autoapi
      const apiUrlOne = `${BASE_URL}/q7/1`;
      const apiUrlTwo = `${BASE_URL}/q7/2`;
      // Error Handling By Try-Catch Block
      try {
        // fetching chart analysis data
      const responseChartData = await fetch(apiUrlOne, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      // fecthing month prediction data
      const responsePredictionData= await fetch(apiUrlTwo, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      
      const fetchedReponseChartData = await responseChartData.json();
      const fetchedReponsePredictionData = await responsePredictionData.json();

      const chartData = JSON.parse(fetchedReponseChartData);
      const predictionData = JSON.parse(fetchedReponsePredictionData);
      //set data to chart
      //xAxes values
      setLabels(MONTHS_LIST);
      //line charts data
      // SMA -> SIMPLE MOVING AVERAGE
      //Diff = Values - SMA
      //chartData index number based on data we recieved from server
      setEconomy(Object.values(chartData[0]));
      setLuxury(Object.values(chartData[1]));
      setMidRange(Object.values(chartData[2]));
      setUltraLuxury(Object.values(chartData[3]));
      setEconomySMA(Object.values(chartData[4]));
      setLuxurySMA(Object.values(chartData[5]));
      setMidRangeSMA(Object.values(chartData[6]));
      setUltraLuxurySMA(Object.values(chartData[7]));
      setEconomyDiff(Object.values(chartData[8]));
      setLuxuryDiff(Object.values(chartData[9]));
      setMidRangeDiff(Object.values(chartData[10]));
      setUltraLuxuryDiff(Object.values(chartData[11]));
      //Prediction Modal data
      setMonthsPrediction(predictionData);
      } catch (error) {
        //will print error to console if something goes wrong...
        console.error(error)
      }
    }
    getAnalysisData();
  }, []);

  //chart configurations
  const options = {
    responsive: true,
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
          text: "Months",
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
  //chart data object
  const data = {
    labels,
    datasets: [
      {
        label: "Economy",
        data: economy,
        backgroundColor: chartColors[0],
        borderColor: chartColorsV2[0],
      },
      {
        label: "Luxury",
        data: luxury,
        backgroundColor: chartColors[1],
        borderColor: chartColorsV2[1],
      },
      {
        label: "Mid Range",
        data: midRange,
        backgroundColor: chartColors[2],
        borderColor: chartColorsV2[2],
      },
      {
        label: "Ultra Luxury",
        data: ultraLuxury,
        backgroundColor: chartColors[3],
        borderColor: chartColorsV2[3],
      },
      {
        label: "Economy SMA",
        data: economySMA,
        borderDash: [10, 5],
        backgroundColor: chartColorsV1[0],
      },
      {
        label: "Luxury SMA",
        data: luxurySMA,
        borderDash: [10, 5],
        backgroundColor: chartColorsV1[1],
      },
      {
        label: "Mid Range SMA",
        data: midRangeSMA,
        borderDash: [10, 5],
        backgroundColor: chartColorsV1[2],
      },
      {
        label: "Ultra Luxury SMA",
        data: ultraLuxurySMA,
        borderDash: [10, 5],
        backgroundColor: chartColorsV1[3],
      },
      {
        type: "bar",
        label: "Economy-EconomySMA",
        data: economyDiff,
        backgroundColor: chartColorsV2[0],
      },
      {
        type: "bar",
        label: "Luxury-LuxurySMA",
        data: luxuryDiff,

        backgroundColor: chartColorsV2[1],
      },
      {
        type: "bar",
        label: "MidRange-MidRangeSMA",
        data: midRangeDiff,
        backgroundColor: chartColorsV2[2],
      },
      {
        type: "bar",
        label: "UltraLuxury-UltraLuxurySMA",
        data: ultraLuxuryDiff,
        backgroundColor: chartColorsV2[3],
      },
    ],
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={handleOpen}>
          View Predctions and Deciding Criteria
        </Button>
        {/* Predictions modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <InfoContainer>
              Criteria:
              <br />
              1. Months sales should be above simple moving average.
              <br />
              2. Months with larger difference from simple moving average are
              preferred.
            </InfoContainer>
            <ModalTitle>Predictions For</ModalTitle>
            <ModalItem>
              <Subtitle>Economy</Subtitle>
              <Month>{monthsPrediction[0]}</Month>
              <Month>{monthsPrediction[1]}</Month>
              <Month>{monthsPrediction[2]}</Month>
            </ModalItem>
            <ModalItem>
              <Subtitle>Luxury</Subtitle>
              <Month>{monthsPrediction[3]}</Month>
              <Month>{monthsPrediction[4]}</Month>
              <Month>{monthsPrediction[5]}</Month>
            </ModalItem>
            <ModalItem>
              <Subtitle>Mid Range</Subtitle>
              <Month>{monthsPrediction[6]}</Month>
              <Month>{monthsPrediction[7]}</Month>
              <Month>{monthsPrediction[8]}</Month>
            </ModalItem>
            <ModalItem>
              <Subtitle>Ultra Luxury</Subtitle>
              <Month>{monthsPrediction[9]}</Month>
              <Month>{monthsPrediction[10]}</Month>
              <Month>{monthsPrediction[11]}</Month>
            </ModalItem>
          </Box>
        </Modal>
      </Box>
      {/* chartjs line chart */}
      <Line options={options} data={data} />
    </Box>
  );
}

export default RightTimeToLauchCarUsingSMA;