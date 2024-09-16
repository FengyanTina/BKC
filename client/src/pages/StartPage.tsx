import "../App.css";
import PrayerBible from "../assets/spiritual-prayer-hands-holding-bible.jpg";
import { Box, Link, Typography } from "@mui/material";
import RollingSection from "../components/common/RollingSection";
import EventCard from "../components/common/EventCard";
import Grid from "@mui/material/Grid2";
import worshipHands from "../assets/worshipHands.jpg";
import edward from "../assets/edward.jpg";
import BethelWorship from "../assets/BethelWorship.jpg";
import Worship from "../assets/Worship.jpeg";
import Footer from "../components/footer/Footer";
import ImageGallary from "../components/common/ImageGallary";
import InforCard from "../components/common/InforCard";
import { SocialIcon } from "react-social-icons";
import SwiperSlider from "../components/common/NewsCarousel";
import NewsCarousel from "../components/common/NewsCarousel";

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
      {/* --------------Body----------- */}
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
        {/* --------------comming events----------- */}
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
              fontWeight: {
                xs: 700, // Lighter font weight for small screens (mobile devices)
                sm: 900, // Default font weight for larger screens
              },
              fontSize: {
                xs: "4rem", // Smaller font size for small screens (mobile devices)
                sm: "6rem", // Default font size for larger screens (tablets and up)
              },
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
        < NewsCarousel  /> 
 
      </Box>
      {/* --------------ACTIVITIES----------- */}
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
              fontWeight: {
                xs: 700, // Lighter font weight for small screens (mobile devices)
                sm: 900, // Default font weight for larger screens
              },
              fontSize: {
                xs: "4rem", // Smaller font size for small screens (mobile devices)
                sm: "6rem", // Default font size for larger screens (tablets and up)
              },
              lineHeight: "1em",
              color: "transparent",
              WebkitTextStroke: "1px #d3d3d3",
              textTransform: "uppercase",
            }}
          >
            Activities
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <InforCard
              category="Activities"
              title="Se alla aktivitet här"
              subtitle="adjective"
              content="Under höstens tre första veckor (36-38) kommer vi uppmuntra till bön och fasta.Under höstens tre Under höstens tre Under höstens tre Under höstens tre tre Under höstens tre "
              buttonText="Learn More"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent:'flex-start',
                gap: "10px", // Adjust spacing between icons
                paddingTop: "10px", // Space above the icons
                paddingLeft:'10px',
              }}
            >
              <SocialIcon
              url="https://instagram.com"
                network="pinterest"
                style={{ height: 25, width: 25 }}
              />
              <SocialIcon
                url="https://instagram.com"
                network="instagram"
                style={{ height: 25, width: 25 }}
              />

              <SocialIcon
                url="https://facebook.com"
                network="facebook"
                style={{ height: 25, width: 25 }}
              />
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
              maxWidth: 400,
              height: 300,
              transform: "translateZ(0)",
              justifyContent: "center", // Center horizontally
              overflow: "hidden", // Hide any overflow
            }}
          >
            <ImageGallary />
          </Grid>
        </Grid>
      </Box>
        {/* --------------ACTIVITIES-Sunday Service----------- */} 
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
            size={{ xs: 12, sm: 6 }}
            sx={{
              maxWidth: 400,
              height: 250,
              transform: "translateZ(0)",      
            }}
          >
            <img
              src={Worship} // Replace with the URL of your image
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
              category="Sunday Service"
              title="Word of the Day"
              subtitle="adjective"
              content="Borås Kristna Center har haft bibelskola och bibelundervisning i sin kallelse i över 35 år. Nu till hösten och vintern kommer du, under 21 kvällar och 42 lektioner, ges tillfälle att bli undervisad och uppbyggd i Guds Ord. Du kommer få förståelse över din position i Gud och rättfäredigheten i Jesus. Du kommer även få utrustning till att leva ut dina gåvor som Gud lagt på ditt liv."
              buttonText="Learn More"
            />
          </Grid>
        </Grid>
      </Box>

       {/* --------------ACTIVITIES-BKC Kids----------- */} 

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
              category="BKC Kids"
              title="Word of the Day"
              subtitle="adjective"
              content="Bibeln beskriver Gud som en Fader. Han älskar och längtar efter en relation med varje människa. Jesus säger att han är vägen, sanningen och livet och var och en som längtar efter livets mening, efter tillvarons själva pulserande centrum, är välkommen in i hans stora famn."
              buttonText="Learn More"
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
              maxWidth: 400,
              height: 250,
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
                display: "block",
              }}
            />
          </Grid>
        </Grid>
      </Box>

       {/* --------------ACTIVITIES-Youth----------- */} 

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
            size={{ xs: 12, sm: 6 }}
            sx={{
              maxWidth: 400,
              height: 250,
              transform: "translateZ(0)",
            }}
          >
            <img
              src={worshipHands} // Replace with the URL of your image
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
              category="Youth Group"
              title="Word of the Day"
              subtitle="adjective"
              content="Bibeln beskriver Gud som en Fader. Han älskar och längtar efter en relation med varje människa. Jesus säger att han är vägen, sanningen och livet och var och en som längtar efter livets mening, efter tillvarons själva pulserande centrum, är välkommen in i hans stora famn."
              buttonText="Learn More"
            />
          </Grid>
        </Grid>
      </Box>

       {/* --------------ACTIVITIES-Home Group----------- */} 

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
              category="Home Group"
              title="Word of the Day"
              subtitle="adjective"
              content="Bibeln beskriver Gud som en Fader. Han älskar och längtar efter en relation med varje människa. Jesus säger att han är vägen, sanningen och livet och var och en som längtar efter livets mening, efter tillvarons själva pulserande centrum, är välkommen in i hans stora famn."
              buttonText="Learn More"
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
              maxWidth: 400,
              height: 250,
              transform: "translateZ(0)",
              display: "flex", // Flexbox to center the image
              alignItems: "center", // Center vertically
              justifyContent: "center", // Center horizontally
              overflow: "hidden", // Hide any overflow
            }}
          >
            <img
              src={edward} // Replace with the URL of your image
              alt="Description"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensure the image covers the container
                display: "block",
              }}
            />
          </Grid>
        </Grid>
        
      </Box>
      <Box
      sx={{
        width: '100vw',
        padding: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid  size={{ xs: 12, sm: 4 }}>
          <EventCard
            title={"Sunday Service"}
            image={worshipHands}
            description={"Time: 10:00 AM"}
          />
        </Grid>
        <Grid  size={{ xs: 12, sm: 4 }}>
          <EventCard
            title={"Youth Event"}
            image={BethelWorship}
            description={"Time: 2:00 PM"}
          />
        </Grid>
        <Grid  size={{ xs: 12, sm: 4 }}>
          <EventCard
            title={"Prayer Meeting"}
            image={edward}
            description={"Time: 6:00 PM"}
          />
        </Grid>
      </Grid>
    </Box>
      

      <Footer />
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
