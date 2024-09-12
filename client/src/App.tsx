import { Box, Typography } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import TabBar from "./components/appBar/TabBar";
import RollingSection from "./components/common/RollingSection";
import DrawerAppBar from "./components/appBar/DrawerAppBar";
import home from "./pages/StartPage";
import React, { useEffect } from "react";

export default function App() {
    const navigate = useNavigate();
   useEffect(() => {
        navigate('/home'); // Adjust this to the default route (start page)
      }, [navigate]);

    return (
      <>
        <Box component="main">
          {/* <DrawerAppBar /> */}
          <TabBar />    
          <Outlet />
        </Box>
      </>
    );
  }
  