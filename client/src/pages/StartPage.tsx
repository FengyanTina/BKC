import "../App.css";
import DrawerAppBar from "../components/appBar/DrawerAppBar";
import PrayerBible from "../assets/spiritual-prayer-hands-holding-bible.jpg";
import { Outlet } from "react-router";
import { Box, Link, Typography } from "@mui/material";
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
    <Box display={"flex"} flexDirection={"column"}>
      <Box
        className="container"
        sx={{
          backgroundImage: `url(${PrayerBible})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            "& a": {
              position: "relative",
              paddingLeft: "20px", // Add padding to make room for the line
              marginBottom: "20px", // Space between the links
              textDecoration: "none", // Remove underline from links
              color: "black", // Set text color
              fontSize: "18px", // Adjust font size as needed
            },
            "& a::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: "50%",
              width: "4px", // Width of the vertical line
              height: "20px", // Height of the vertical line
              backgroundColor: "black", // Color of the vertical line
              transform: "translateY(-50%)", // Center the line vertically with respect to the text
            },
          }}
        >
          <Link href="/">About Us</Link>
          <Link href="/">New Here</Link>
        </Box>

        <Box
          sx={{
            width: "300px", // Set fixed width
            height: "200px", // Set fixed height
            overflow: "hidden", // Hide overflow content to prevent layout issues
            position: "relative", // Ensure that any absolute positioned elements are contained
            border: "1px solid #ddd", // Optional: Add border for visual clarity
            borderRadius: "8px", // Optional: Add border radius for rounded corners
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", // Optional: Add shadow for visual depth
            marginLeft: "20px", // Margin from the left side
            transform: "translateX(-30px)", // Adjust this value to shift left
          }}
        >
          <RollingSection />
        </Box>
      </Box>

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
      </div>
    </Box>
  );
}
