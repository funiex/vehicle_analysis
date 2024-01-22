import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { BASE_URL } from "../../consts/urls";
import { chartColors } from "../../consts/colors";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

//Tabs options
const tabs = [
  "Drive Train",
  "Transmission",
  "Class",
  "Brand",
  "Fuel_Type",
  "Body_type",
];

const CustomerSegements = () => {
  //tabs options in integer format
  const [value, setValue] = useState(0);
  //pie chart data
  const [series, setSeries] = useState([]);
  //pie chart labels (DriveTrain, Transmission, Fuel, Class, etc)
  const [labels, setLabels] = useState([]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: tabs[value],
        data: series,
        backgroundColor: chartColors,
        borderWidth: 1,
      },
    ],
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //Making API call for pie chart data
  useEffect(() => {
    async function getCustomerSegmentsData() {
      //using q6 of autoapi
      const apiUrl = `${BASE_URL}/q6/${value}`;
      // Error Handling By Try-Catch Block
      try{
        const response = await fetch(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        //fetchedResponse data
        const fetchedResponse = await response.json();
        //javascript object
        const chartData = JSON.parse(fetchedResponse);
        //set chart data
        setLabels(Object.keys(chartData));
        setSeries(Object.values(chartData));
      } catch(e){
        //will print error object to javascript console, if something goes wrong.
        console.error(e)
      }
      
    }
    getCustomerSegmentsData();
  }, [value]); //will rerender chart when tabs are toggle

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      {/* MUI 5 Tabs Doc: https://mui.com/material-ui/react-tabs/#main-content */}
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Drive Train" />
        <Tab label="Transmission" />
        <Tab label="Class" />
        <Tab label="Brand" />
        <Tab label="Fuel Type" />
        <Tab label="Body Type" />
      </Tabs>
      <Pie data={data} />
    </Box>
  );
};

export default CustomerSegements;
