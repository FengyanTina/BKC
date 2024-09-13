import "../App.css";
import DrawerAppBar from "../components/appBar/DrawerAppBar";
import PrayerBible from "../assets/spiritual-prayer-hands-holding-bible.jpg";
import { Outlet } from "react-router";
import { Box, Grid, Link, Typography } from "@mui/material";
import RollingSection from "../components/common/RollingSection";
import TabBar from "../components/appBar/TabBar";

const divStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #DCEEFF, #FDE1FE)",
  height: "100vh", // Or the desired height
  position: "relative",
};
const divStyle1: React.CSSProperties = {
  backgroundImage: "url('/path-to-nature-image.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "blur(2px) brightness(0.9)", // Optional blur and brightness effect
  height: "100vh", // Full-page height
  width: "100%",
};
const divStyle2: React.CSSProperties = {
  background: "linear-gradient(#E0F7FA, #B2EBF2)",
  maskImage: "url('/path-to-church-silhouette.svg')", // Church silhouette
  maskSize: "cover",
  maskRepeat: "no-repeat",
  maskPosition: "center",
  height: "100vh",
};
const divStyle3: React.CSSProperties = {
  backgroundImage: "url('/path-to-stained-glass-pattern.png')",
  opacity: 0.6,
  filter: "contrast(1.2) brightness(1.1)",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const divStyle4: React.CSSProperties = {
  position: "relative",
  height: "100vh",
  background: "linear-gradient(135deg, #FFEEA3, #FFE4A5)", // A soft gradient
};
const divStyle5: React.CSSProperties = {
  background:
    "radial-gradient(circle, rgba(255,255,255,0.2), rgba(255,255,255,0))",
  height: "100vh",
};
export default function StartPage() {
  return (
     <Box display="flex" flexDirection="column">
    <Grid
    spacing={2}
    direction={{ xs: "column", sm: "row" }}
      sx={{
        backgroundImage: `url(${PrayerBible})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%", // Full width of the container
        height: "100vh", // Full viewport height
      }}
    >
      {/* Link Section */}
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          "& a": {
            position: "relative",
            paddingLeft: "20px", // Space for the vertical line
            marginBottom: "20px", // Space between the links
            textDecoration: "none", // No underline
            color: "black",
            fontSize: "18px", // Adjust font size
          },
          "& a::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: "50%",
            width: "4px", // Vertical line width
            height: "20px", // Vertical line height
            backgroundColor: "black", // Line color
            transform: "translateY(-50%)", // Center line vertically
          },
        }}
      >
        <Link href="/">Our Vision</Link>
        <Link href="/">New Here</Link>
        <Link href="/">Contact Us</Link>
      </Grid>

      {/* Rolling Section */}
      <Grid
        container
        direction="row"
        alignItems="center"
        sx={{
          width: {
            xs: "100%", // Full width on small screens
            sm: "300px", // Adjust width for tablets
            md: "400px", // Width for larger screens
          },
          height: {
            xs: "200px", // Adjust height for small screens
            sm: "250px", // Tablet height
            md: "300px", // Desktop height
          },
          border: "1px solid #ddd", // Border for clarity
          borderRadius: "8px", // Rounded corners
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow
          overflow: "hidden", // Prevent overflow
          display: "flex", // Flexbox to center content
          justifyContent: "center", // Horizontal centering
        }}
      >
        <RollingSection />
      </Grid>
      <Grid></Grid>
    </Grid>
 
      {/* 
      <Box className="card">
        <Box className="contentbef"></Box>
        <Box className="content">
          <Typography variant="h2">01</Typography>
          <Typography variant="h3">Card One</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Typography>
          <Link href="/">Read More</Link>
        </Box>
      </Box>
      <Box className="card">
        <Box className="content">
          <Typography variant="h2">02</Typography>
          <Typography variant="h3">Card Two</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Typography>
          <Link href="/">Read More</Link>
        </Box>
      </Box>
      <Box className="card">
        <Box className="content">
          <Typography variant="h2">03</Typography>
          <Typography variant="h3">Card Three</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Typography>
          <Link href="/">Read More</Link>
        </Box>
      </Box>

      <div
        className="container"
        style={{
          backgroundImage: `url(${PrayerBible})`,
          backgroundSize: "cover",
        }}
      >
        <div className="card">
          <div className="contentbef"></div>
          <div className="content1">
            <h3>Card One</h3>
            <a href="/">Read More</a>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h3>Card Two</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p>
            <a href="/">Read More</a>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h3>Card Three</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p>
            <a href="/">Read More</a>
          </div>
        </div>
      </div> */}
    </Box>
  );
}
