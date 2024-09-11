import "./App.css";
import DrawerAppBar from "./components/appBar/DrawerAppBar";
import Varhistoria from "./assets/Varhistoria.jpg";
import Mission from "./assets/Mission.png";
import { Outlet } from "react-router";
import { Box, Link, Typography } from "@mui/material";
import RollingSection from "./components/common/RollingSection";
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
export default function App() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      minHeight={"100%"}
    >
      <div
        className="container"
        style={{
          background: "linear-gradient(135deg, #DCEEFF, #FDE1FE)",
          height: "100vh", // Or the desired height
          position: "relative",
        }}
      >
        <DrawerAppBar />
        
        <div className="card">
          <div className="contentbef"></div>
          <div className="content1">
            <div className="cross-overlay"></div>
            <h3>Card One</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p>
            <a href="/">Read More</a>
          </div>
        </div>

        <div className="card">
          <div className="content1">
            <RollingSection />
          </div>
        </div>
      </div>
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
      <Box component="main">
        <Outlet />
      </Box>
      <div
        className="container"
        style={{
          backgroundImage: `url(${Varhistoria})`,
          backgroundSize: "cover",
        }}
      >
        <DrawerAppBar></DrawerAppBar>
        <div className="card">
          <div className="contentbef"></div>
          <div className="content1">
            <h3>Card One</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p> */}
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
