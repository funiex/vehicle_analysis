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

// Tabs options array
const tabs = [
  "Cars Production(Million)",
  "Cars Sales(Million)",
  "Cars Exports(Billion USD)",
];

const TopFiveCountriesByProductionSalesExport = () => {
  //tabs options values
  const [value, setValue] = useState(0);
  //category data values for ex. array of values of production
  const [values, setValues] = useState([]);
  //array of countires
  const [countries, setCountries] = useState([]);

  const data = {
    labels: countries,
    datasets: [
      {
        label: tabs[value],
        data: values,
        backgroundColor: chartColors,
        borderWidth: 1,
      },
    ],
  };
  //handles pie chart switching
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function getChartdata() {
      // API Docs: https://github.com/aj-2000/autoapi
      const apiUrl = `${BASE_URL}/q5/${value}`;
      //Error handling By Try-catch Block
      try {
        const response = await fetch(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const fetchedResponse = await response.json();
        const chartData = JSON.parse(fetchedResponse);
        setCountries(Object.values(chartData["Country"]));
        setValues(Object.values(chartData[tabs[value]]));
      } catch (error) {
        // will print error to console if something goes wrong...
        console.error(error);
      }
    }
    getChartdata();
  }, [value]); //will rerender chart when tabs are toggle
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      {/* MUI5 Tabs Docs: https://mui.com/material-ui/react-tabs/#main-content */}
      <Tabs
        sx={{ justifyContent: "center" }}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Production(M UNITS)" />
        <Tab label="Sales(M UNITS)" />
        <Tab label="Exports(B USD)" />
      </Tabs>
      <Pie data={data} />
    </Box>
  );
};

export default TopFiveCountriesByProductionSalesExport;
