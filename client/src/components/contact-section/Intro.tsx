import React from "react";
import "./intro.css";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Intro: React.FC = () => (
  <Box
    
  
    className="intro-container"
  >
    <Grid>
      <Typography  className="intro-h2" >Our Mission</Typography>
      <Typography className="intro-p">
        Every single person who understands the impact of the web should be an
        advocate and strive for a better, more inclusive web for all.
      </Typography>
    </Grid>
  </Box>
);

export default Intro;
