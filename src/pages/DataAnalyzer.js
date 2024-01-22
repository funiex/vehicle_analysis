import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import TableViewIcon from "@mui/icons-material/TableView";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import CompareCars from "../components/CompareCars";
import { useDispatch } from "react-redux";
import { viewCharts, viewRecords } from "../redux/tabsSlice";

//funciton responsible to change view between charts and records
//handling and change tabs states using REDUX (tabsSlice)
export default function IconTabs() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      dispatch(viewCharts(""));
    } else {
      dispatch(viewRecords(""));
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* MUI5 Tabs Docs: https://mui.com/material-ui/react-tabs/#main-content */}
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon position tabs example"
            centered
          >
            <Tab
              icon={<AutoGraphIcon />}
              iconPosition="start"
              label="chart drawer"
            />
            <Tab
              icon={<TableViewIcon />}
              iconPosition="start"
              label="view records"
            />
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          <CompareCars />
        </Grid>
      </Grid>
    </Box>
  );
}
