// Component responsible for top secition showing top brands, sales etc.
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../consts/urls";
import Leaderboard from "../components/LeaderBoard";
import Sales from "../components/Sales";
import { LinearProgress } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
const Overview = (props) => {
  const [salesData, setSalesData] = useState([]);
  const [leaders, setLeaders] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    //Get and set sale& brands data from api
    async function getOverviewData() {
      const apiUrl = `${BASE_URL}/overview/`;
      // Error Handling By Try-Catch Block
      try {
        const response = await fetch(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const data = await response.json();
        const obj = JSON.parse(data);
        setLeaders({
          topBrandYear: obj.top_brand_of_year,
          topBrandMonth: obj.top_brand_of_month,
        });
        setSalesData(JSON.parse(obj.sales));
        setIsLoaded(true);
      } catch (error) {
        //will print error to console if something goes wrong
      }
    }
    getOverviewData();
  }, []);

  if (!isLoaded) {
    return <LinearProgress />;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Sales
            title="Sold this year"
            currentValue={salesData["2022"]}
            previousValue={salesData["2021"]}
          />
        </Grid>
        <Grid item>
          <Sales
            title="Sold this month"
            currentValue={salesData["May_2022"]}
            previousValue={salesData["April_2022"]}
          />
        </Grid>
        <Grid item>
          <Leaderboard
            title="Top Brand this year"
            value={leaders.topBrandYear}
          />
        </Grid>
        <Grid item>
          <Leaderboard
            title="Top Brand this month"
            value={leaders.topBrandMonth}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
