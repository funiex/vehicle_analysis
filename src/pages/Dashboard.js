import React from "react";

// Reusable Functional React Components
import { DataContainer } from "../components/DataContainer";

// MUI5 Component Components
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/system/Box";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FactoryIcon from "@mui/icons-material/Factory";
import BarChartIcon from "@mui/icons-material/BarChart";
import LinkIcon from "@mui/icons-material/Link";
import Alert from "@mui/material/Alert";

//Top section import
import Overview from "../layout/Overview";

//Queries Imports
import SalesVariationByConsumerSentiment from "../components/queries/SalesVariationByConsumerSentiment";
import MostExpensiveCarBrands from "../components/queries/MostExpensiveCarBrands";
import RelationshipBetweenPriceAndMileage from "../components/queries/RelationshipBetweenPriceAndMileage";
import RightTimeToLauchCarUsingSMA from "../components/queries/RightTimeToLauchCarUsingSMA";
import TopFiveWorstAndBestPerformers from "../components/queries/TopFiveWorstAndBestPerformers";
import TopFiveCountriesByProductionSalesExport from "../components/queries/TopFiveCountriesByProductionSalesExport";
import GrowthOfPassengerCarsProductionInIndia from "../components/queries/GrowthOfPassengerCarsProductionInIndia";
import SalesVolumesComparisonOfTopTenBrands from "../components/queries/SalesVolumesComparisonOfTopTenBrands";
import TopAutoMakersWorldWideByEarningsRevenueMarketCapEmployees from "../components/queries/TopAutoMakersWorldWideByEarningsRevenueMarketCapEmployees";
import CustomerSegements from "../components/queries/CustomerSegements";

//Table component is powered by MUI5 library
// Chart component is powered by chartJS library
// Componets from src/components/queries/ are rendered
// (structured using MUI Grid System, which is using flexbox)
const Dashboard = () => {
  return (
    <Stack>
      {/* Overview section showing sales, top brands */}
      <Overview />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* Section 1 */}
          <Grid item xs={12}>
            <Alert icon={<FactoryIcon />} severity="info">
              Industry Analysis
            </Alert>
          </Grid>
          {/* Piechart showing different customer segments */}
          <Grid item xs={12} md={4} lg={4}>
            <DataContainer
              title="CUSTOMER SEGMENTS (IN PERCENTAGES) "
              queryComponent={<CustomerSegements />}
            />
          </Grid>
          {/* Piechart showing top 5 countrie by cars production, sales and exports  */}
          <Grid item xs={12} md={4} lg={4}>
            <DataContainer
              title="TOP 5 COUNTRIES BY CARS"
              queryComponent={<TopFiveCountriesByProductionSalesExport />}
            />
          </Grid>
          {/* Piechart showing top automakers by earining, revenue, marketcap and employees_count */}
          <Grid item xs={12} md={4} lg={4}>
            <DataContainer
              title="TOP AUTOMAKERS WORLDWIDE BY"
              queryComponent={
                <TopAutoMakersWorldWideByEarningsRevenueMarketCapEmployees />
              }
            />
          </Grid>
          {/* Multi line chart showing Right time to launch analysis and prediction using simple moving average */}
          {/* Hiding This component on smaller screens i.e. less than 600pixels */}
          {/* Section Two */}
          <Grid item xs={12}>
            <Alert icon={<ReceiptIcon />} severity="info">
              Sales Analysis
            </Alert>
          </Grid>
          <Grid
            item
            display={{ xs: "none", sm: "block" }}
            sm={12}
            md={12}
            lg={12}
          >
            <DataContainer
              title="RIGHT TIME TO LAUNCH CAR USING SIMPLE MOVING AVERAGE(SMA)"
              queryComponent={<RightTimeToLauchCarUsingSMA />}
            />
          </Grid>
          {/* Bar chart showing relationship 2019 and 2020 sales of top 10 brands */}
          <Grid item xs={12} md={12} lg={6}>
            <DataContainer
              title="SALES VOLUME COMPARISON OF TOP 10 BRANDS"
              queryComponent={<SalesVolumesComparisonOfTopTenBrands />}
            />
          </Grid>
          {/* Bar char showing top 5 best performs and top 5 worst perfomers */}
          <Grid item xs={12} md={12} lg={6}>
            <DataContainer
              title="TOP 5 WORST & BEST PERFORMERS OF 2020"
              queryComponent={<TopFiveWorstAndBestPerformers />}
            />
          </Grid>
          {/* Section Three */}
          <Grid item xs={12}>
            <Alert icon={<LinkIcon />} severity="info">
              Relationship Analysis
            </Alert>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            {/* Multi axis line chart showing sales variation with consumer sentiment */}
            <DataContainer
              title="SALES VARIATION WITH CONSUMER SENTIMENT"
              queryComponent={<SalesVariationByConsumerSentiment />}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            {/* Scatter chart showing relationship between price and mileage */}
            <DataContainer
              title="RELATIONSHIP BETWEEN PRICE AND MILEAGE"
              queryComponent={<RelationshipBetweenPriceAndMileage />}
            />
          </Grid>
          <Grid item xs={12}>
            <Alert icon={<BarChartIcon />} severity="info">
              More Analysis
            </Alert>
          </Grid>
          {/* A table component showing top expensive brands by their avg car price */}
          <Grid item xs={12} md={12} lg={12}>
            <DataContainer
              title="TOP 5 EXPENSIVE CAR BRANDS"
              queryComponent={<MostExpensiveCarBrands />}
            />
          </Grid>
          {/* A multitype chart component shows growth of passenger cars production in india */}
          <Grid item xs={12} md={12} lg={12}>
            <DataContainer
              title="GROWTH OF PASSENGER CARS PRODUCED IN INDIA"
              queryComponent={<GrowthOfPassengerCarsProductionInIndia />}
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default Dashboard;
