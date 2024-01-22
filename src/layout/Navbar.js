// Main Navigation bar showing Logo, App name and pages links.
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Insights } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

// Menu Items
const pages = [["DASHBOARD"], ["DATA ANALYZER"], ["SALES FORECAST"]];

//function responsibe for opening and closing of menu 
const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //useNavigate() hook provided by ReactRouterDOM V6
  //DOCs: https://reactrouter.com/docs/en/v6
  let navigate = useNavigate();
  //Responsible for Burger Menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  //Responsible for navigation between pages on smaller screens devices(using hamburger Menu)
  //MUI5 AppBar Component, DOCs: https://mui.com/material-ui/react-app-bar/
  const handleCloseNavMenu = (event, page) => {
    if (page === pages[0]) {
      //if requested page is Dashboard
      navigate("/", { replace: false });
    } else if (page === pages[1]) {
      //if requested page is Data Analyzer
      navigate("/analyzer", { replace: false });
    } else if (page === pages[2]) {
      //if requested page is Sales Forecast
      navigate("/forecast", { replace: false });
    }
    setAnchorElNav(null);
  };

  // Responsible for navigation between pages on mid to large screens devices(using Navbar menu)
  // MUI5 AppBar Component, DOCs: https://mui.com/material-ui/react-app-bar/
  function handleAnalyzer() {
    navigate("/analyzer", { replace: false });
    setAnchorElNav(null);
  }

  function handleDashboard() {
    navigate("/", { replace: false });
    setAnchorElNav(null);
  }

  function handleForecast() {
    navigate("/forecast", { replace: false });
    setAnchorElNav(null);
  }

  return (
    //AppBar component from MUI5 library
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* //Displays logo on large screens */}
          <Insights sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={handleDashboard}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AUTO ANALYTICS
          </Typography>
          {/* //hamburger menu logic (source MUI5: docs) */}
          {/* https://mui.com/material-ui/react-app-bar/#main-content */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleDashboard}>
                <Typography textAlign="center">{pages[0]}</Typography>
              </MenuItem>

              <MenuItem onClick={handleAnalyzer}>
                <Typography textAlign="center">{pages[1]}</Typography>
              </MenuItem>
              <MenuItem onClick={handleForecast}>
                <Typography textAlign="center">{pages[2]}</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Insights sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: {xs:"600", md: "700"},
              fontSize: {xs:"1rem", md: "2rem"},
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AUTO ANALYTICS
          </Typography>
          {/* //Navingation menu on mid to large screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleDashboard}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[0]}
            </Button>
            <Button
              onClick={handleAnalyzer}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[1]}
            </Button>

            <Button
              onClick={handleForecast}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[2]}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
