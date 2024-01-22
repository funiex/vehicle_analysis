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
const tabs = ["earnings_ttm", "revenue_ttm", "marketcap", "employees_count"];

const TopAutoMakersWorldWideByEarningsRevenueMarketCapEmployees = () => {
  //value of category - used for toggleing the tabs
  const [value, setValue] = useState(0);
  //will store values of earnings, revenue, marketcap, employee count
  const [values, setValues] = useState([]);
  //list of automakers
  const [autoMakers, setAutoMakers] = useState([]);
  //chart data object
  const data = {
    labels: autoMakers,
    datasets: [
      {
        label: tabs[value],
        data: values,
        backgroundColor: chartColors,
        borderWidth: 1,
      },
    ],
  };
  //handles tabs toggling
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function getChartData() {
      const apiUrl = `${BASE_URL}/q10/${value}`;
      // Error Handling By Try-Catch Block
      try {
        const response = await fetch(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const fetchedResponse = await response.json();
        const chartdata = JSON.parse(fetchedResponse);
        setAutoMakers(Object.values(chartdata["Name"]));
        setValues(Object.values(chartdata[tabs[value]]));
      } catch (error) {
        //will print error message to console if something goes wrong
      }
    }
    getChartData();
  }, [value]); //will rerender chart when tabs are toggle
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      {/* Tabs MUI5 Component Docs: https://mui.com/material-ui/react-tabs/#main-content */}
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="EARNINGS(B USD)" />
        <Tab label="REVENUE(B USD)" />
        <Tab label="Market Cap.(B USD)" />
        <Tab label="Employees" />
      </Tabs>
      <Pie data={data} />
    </Box>
  );
};

export default TopAutoMakersWorldWideByEarningsRevenueMarketCapEmployees;
