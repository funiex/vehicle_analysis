import { Box, Stack } from "@mui/material";
import Navbar from "./layout/Navbar";
import { useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DataAnalyzer from "./pages/DataAnalyzer";
import SalesForecast from "./pages/SalesForecast";

function App() {
  let location = useLocation();
  return (
    <Box>
      <Stack spacing={2}>
        <Navbar />
        <div>
          {/* Rendenring different pages inside the APP component based on the pathname */}
          {(location.pathname === "/" ||
            location.pathname === "/dashboard") && <Dashboard />}
          {location.pathname === "/analyzer" && <DataAnalyzer />}
          {location.pathname === "/forecast" && <SalesForecast />}
        </div>
      </Stack>
    </Box>
  );
}

export default App;
