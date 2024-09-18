import { Box } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import TabBar from "./components/appBar/TabBar";
import { useEffect } from "react";

export default function App() {
    const navigate = useNavigate();
   useEffect(() => {
        navigate('/home'); // Adjust this to the default route (start page)
      }, [navigate]);

    return (
      <>
      
        <Box component="main" sx={{marginTop:'-60px'}}>
          {/* <DrawerAppBar /> */}
          <TabBar />    
          <Outlet />
        </Box>
      </>
    );
  }
  