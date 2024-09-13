import "../App.css";
import PrayerBible from "../assets/spiritual-prayer-hands-holding-bible.jpg";
import { Box, Link, Typography } from "@mui/material";
import RollingSection from "../components/common/RollingSection";
import EventCard from "../components/common/EventCard";
import Grid from "@mui/material/Grid2";
import worshipHands from "../assets/worshipHands.jpg";
import edward from "../assets/edward.jpg";
import BethelWorship from "../assets/BethelWorship.jpg";
import Footer from "../components/footer/Footer";
import ImageGallary from "../components/common/ImageGallary";
import InforCard from "../components/common/InforCard";

export default function StartPage() {
  return (
    <Box>
      <Grid
        spacing={2}
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
          backgroundAttachment: "fixed",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* Link Section */}
        <Grid
          size={{ xs: 12, sm: 6 }}
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
              height: "100%", // Vertical line height
              backgroundColor: "purple", // Line color
              transform: "translateY(-50%)", // Center line vertically
            },
          }}
        >
          <Box
            sx={{
              marginBottom: "30px",
            }}
          >
            <Typography
              variant="h5"
              style={{
                fontWeight: 900,
                lineHeight: "1em",
                color: "transparent",
                WebkitTextStroke: "2px #ffffff",
                textTransform: "uppercase",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              A place to worship
              <br />
              A place to pray
              <br />A place to learn the words
            </Typography>
          </Box>
          <Link href="/">New Here</Link>
          <Link href="/">Contact Us</Link>
        </Grid>

        {/* Rolling Section */}
        <Grid
          container
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

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          paddingTop: "30px",
          backgroundColor: "#dbe1e8",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          paddingBottom: "20px",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center", // Center on main axis
            alignItems: "center", // Center on cross axis
            textAlign: "center", // Center text
            width: "100vw", // Full width of the screen
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              lineHeight: "1em",
              color: "transparent",
              WebkitTextStroke: "1px #ffffff",
              textTransform: "uppercase",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            Comming Events
          </Typography>
        </Box>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid
            size={{ xs: 12, sm: 4 }}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <EventCard
              title={"SundayService"}
              image={worshipHands}
              description={"Time:"}
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 4 }}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <EventCard
              title={"Youth"}
              image={BethelWorship}
              description={"Time"}
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 4 }}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <EventCard
              title={"Prayer Metting"}
              image={edward}
              description={"Time"}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          paddingTop: "30px",
          backgroundColor: "#f0f4f8",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              lineHeight: "1em",
              color: "transparent",
              WebkitTextStroke: "1px #d3d3d3",
              textTransform: "uppercase",
            }}
          >
            Activities
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <InforCard
              title="Word of the Day"
              subtitle="adjective"
              content="be benevolent well meaning and kindly."
              buttonText="Learn More"
            />
          </Grid>
          <Grid>
            <ImageGallary />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          paddingTop: "30px",
          backgroundColor: "#f0f4f8",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Grid
            sx={{
              maxWidth: 400,
              height: 350,
              // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
              transform: "translateZ(0)",
            }}
          >
            <img
              src={BethelWorship} // Replace with the URL of your image
              alt="Description"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensure the image covers the container
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <InforCard
              title="Word of the Day"
              subtitle="adjective"
              content="be benevolent well meaning and kindly."
              buttonText="Learn More"
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          paddingTop: "30px",
          backgroundColor: "#f0f4f8",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >

          <Grid size={{ xs: 12, sm: 6 }}>
            <InforCard
              title="Word of the Day"
              subtitle="adjective"
              content="be benevolent well meaning and kindly."
              buttonText="Learn More"
            />
          </Grid>
          <Grid
            sx={{
              maxWidth: 400,
              height: 350,
              // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
              transform: "translateZ(0)",
            }}
          >
            <img
              src={edward} // Replace with the URL of your image
              alt="Description"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensure the image covers the container
              }}
            />
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
