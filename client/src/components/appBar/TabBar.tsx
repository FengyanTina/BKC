import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabDrawer from "./TabDrawer";
import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import HuvudloggaBKC3 from "../../assets/Huvudlogga-BKC3.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import './appBar.css'

export default function TabBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen((prevOpen) => !prevOpen);
  };
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const currentTab = location.pathname;

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue); // Navigate to the new route
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "transparent", // Make the background transparent
          
          boxShadow: "none",
          position: "fixed", // Ensure it stays at the top
          top: 0,
          paddingTop:'10px',
          left: 0,
          width: "100%",
          zIndex: 1100,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" },color: 'black' }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h2"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "black",
              fontSize: "4rem",
            }}
          >
            <img
              src={HuvudloggaBKC3}
              alt="Logo"
              style={{ marginRight: 10 }}
            />
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: "50px",
              fontSize: "4rem",
              justifyContent: "center", // Center the MenuItems
              flexGrow: 1, // Allow the Box to grow to occupy space and center its content
              "&:focus": { outline: "none" },
            }}
          >
            <Tabs
              value={currentTab}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs"
            >
              <Tab value="/home" label="Home"  sx={{ fontSize: '1.2rem',  color: 'black',fontWeight: 800,
      WebkitTextStroke: '0.5px white',}}/>
              <Tab value="/schedules" label="Schedules" sx={{ fontSize: '1.2rem', color: 'black',fontWeight: 800,
      WebkitTextStroke: '0.5px white', }}/>
              <Tab value="/services" label="Services" sx={{ fontSize: '1.2rem', color: 'black',fontWeight: 800,
      WebkitTextStroke: '0.5px white', }}/>
              <Tab value="/activities" label="Activities" sx={{ fontSize: '1.2rem', color: 'black',fontWeight: 800,
      WebkitTextStroke: '0.5px white', }}/>
              <Tab value="/contact" label="Contact" sx={{ fontSize: '1.2rem', color: 'black',fontWeight: 800,
      WebkitTextStroke: '0.5px white', }}/>
              <Tab value="/logIn" label="Log In" sx={{ fontSize: '1.2rem', color: 'black',fontWeight: 800,
      WebkitTextStroke: '0.5px white', }}/>
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <TabDrawer open={drawerOpen} onClose={handleDrawerToggle} />
      </nav>
      <Box>
        <Toolbar />
      </Box>
    </Box>
  );
}
