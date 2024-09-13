import "../App.css";
import PrayerBible from "../assets/spiritual-prayer-hands-holding-bible.jpg";
import { Box,  Link, Typography } from "@mui/material";
import RollingSection from "../components/common/RollingSection";
import EventCard from "../components/common/EventCard";
import Grid from '@mui/material/Grid2';
import worshipHands from "../assets/worshipHands.jpg";
import edward from "../assets/edward.jpg";
import BethelWorship from "../assets/BethelWorship.jpg";
import Footer from "../components/common/Footer";

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
            sm: "350px", // Tablet height
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

    <Box sx={{ width: '100%', display:'flex', alignItems:'center',flexDirection:'column' ,gap:'20px', paddingTop:'20px', backgroundColor: '#f0f4f8', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Grid>
        <Typography>
            Comming Events
        </Typography>
        </Grid>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
        <Grid size={4}>
        <EventCard title={"SundayService"} image={worshipHands} description={"Time:"}/>
        </Grid>
        <Grid size={4}>
        <EventCard title={"Youth"} image={BethelWorship} description={"Time"}/>
        </Grid>
        <Grid size={4}>
        <EventCard title={"Prayer Metting"} image={edward} description={"Time"}/>
        </Grid>
      </Grid>
    <Footer />
    </Box>
    
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
