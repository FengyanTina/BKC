import React from "react";
import "./intro.css";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Intro: React.FC = () => (
  <Box
    
  
    sx={{
      backgroundColor: "#001a3f", // Darker shade of Navi Blue
      color: "#ffffff", // White color
      height: "70vh",
      textAlign: "start",
      maxWidth: "100%",
      display: "flex",
      flexDirection:'column',
      alignItems: "flex-start",
      zIndex: -10, position: 'relative'
    }}
  >
    <Grid sx={{ margin: "10", maxWidth: "75vw", padding: "10%" }}>
      <Typography variant="h3">Our Mission</Typography>
      <Typography variant="body1">
        Every single person who understands the impact of the web should be an
        advocate and strive for a better, more inclusive web for all.
      </Typography>
    </Grid>
  </Box>
);

export default Intro;
