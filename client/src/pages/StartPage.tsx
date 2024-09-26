import PrayerBible from "../assets/spiritual-prayer-hands-holding-bible.jpg";
import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import RollingSection from "../components/common/RollingSection";
import Grid from "@mui/material/Grid2";
import worshipHands from "../assets/worshipHands.jpg";
import edward from "../assets/edward.jpg";
import BethelWorship from "../assets/BethelWorship.jpg";
import Worship from "../assets/Worship.jpeg";
import ImageGallary from "../components/common/ImageGallary";
import InforCard from "../components/common/InforCard";
import { SocialIcon } from "react-social-icons";
import Carousel from "../components/common/Carousel";
import { Link, useNavigate } from "react-router-dom";
import PauseOnHover from "../components/common/SlickSlider";
import { useEffect, useState } from "react";
import Map from "../components/map/Map";
import { FaLocationDot } from "react-icons/fa6";
import Conference from "../assets/Conference.jpg";
import Mission from "../assets/Mission.png";
import Prayer from "../assets/Prayer.jpg";
import Bible from "../assets/Bible.jpg";
import { LuMapPin } from "react-icons/lu";
import { FaMapMarkerAlt } from "react-icons/fa";
import RowAndColumnSpacing from "../components/common/RowAndColumn";
const events = [
  {
    time: new Date(2024, 9, 22, 14, 30), // October 22, 2024, 2:30 PM
    title: "Art Exhibition",
    image: PrayerBible,
    description:
      "An exhibition featuring contemporary art pieces from local artists.",
  },
  {
    time: new Date(2024, 9, 25, 19, 0), // October 25, 2024, 7:00 PM
    title: "Tech Conference",
    image: edward,
    description:
      "Join the biggest technology conference of the year with keynote speakers.",
  },
  {
    time: new Date(2024, 9, 27, 9, 0), // October 27, 2024, 9:00 AM
    title: "Charity Run",
    image: Worship,
    description:
      "Participate in the annual charity run to support a good cause.",
  },
  {
    time: new Date(2024, 9, 30, 17, 30), // October 30, 2024, 5:30 PM
    title: "Food Festival",
    image: BethelWorship,
    description:
      "Savor delicious dishes from a variety of food vendors and enjoy live entertainment.",
  },
];
const comingEvents = [
  {
    id: "1",
    title: "Sunday Worship",
    time: new Date("2024-09-22T10:00:00"),
    description: "Join us for a special Sunday worship service.",
    image: worshipHands, // Use actual image URL
  },
  {
    id: "2",
    title: "Community Outreach",
    time: new Date("2024-09-25T14:00:00"),
    description: "Participate in our community outreach program.",
    image: edward, // Use actual image URL
  },
  {
    id: "3",
    title: "Bible Study Group",
    time: new Date("2024-09-27T19:00:00"),
    description: "Deep dive into the scriptures with our study group.",
    image: BethelWorship, // Use actual image URL
  },
  {
    id: "4",
    title: "Prayer Meeting",
    time: new Date("2024-09-30T08:00:00"),
    description: "Come together for our weekly prayer meeting.",
    image: Worship, // Use actual image URL
  },
];
const news = [
  {
    id: "1",
    time: new Date(2024, 9, 22, 14, 30), // October 22, 2024, 2:30 PM
    title: "Reaching out ",
    image: PrayerBible,
    description:
      "An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.",
  },
  {
    id: "2",
    time: new Date(2024, 9, 25, 19, 0), // October 25, 2024, 7:00 PM
    title: "Easter camp",
    image: edward,
    description:
      "Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.",
  },
  {
    id: "3",
    time: new Date(2024, 9, 27, 9, 0), // October 27, 2024, 9:00 AM
    title: "Charity Run",
    image: Worship,
    description:
      "Participate in the annual charity run to support a good cause.",
  },
  {
    id: "4",
    time: new Date(2024, 9, 30, 17, 30), // October 30, 2024, 5:30 PM
    title: "Food Festival",
    image: BethelWorship,
    description:
      "Savor delicious dishes from a variety of food vendors and enjoy live entertainment.",
  },
];
export default function StartPage() {
  const [openMap, setOpenMap] = useState(false);

  const handleOpenMap = () => {
    setOpenMap(true);
  };

  const handleCloseMap = () => {
    setOpenMap(false);
  };

  const topics = [
    { title: " Youtube Video 1", url: "/react-hooks", backgroundImage: Prayer },
    { title: " Youtube Video 2", url: "/js-es6", backgroundImage: Worship },
    {
      title: " Youtube Video 3",
      url: "/css-grid-flexbox",
      backgroundImage: Bible,
    },
    { title: " Youtube Video 4", url: "/redux", backgroundImage: Mission },
    {
      title: " Youtube Video 5",
      url: "/typescript-react",
      backgroundImage: Conference,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const changeTopic = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % topics.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        changeTopic();
      }, 3500); // 30 seconds interval

      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex, topics.length]);

  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundImage: `url(${Worship})`,
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
          size={{ xs: 12, sm: 8 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            "& a": {
              position: "relative",
              paddingLeft: "20px", // Space for the vertical line
              marginBottom: "30px", // Space between the links
              textDecoration: "none", // No underline
              color: "black",
              fontSize: {
                xs: "1rem", // Smaller font size for small screens (mobile devices)
                sm: "1.5rem", // Default font size for larger screens (tablets and up)
              }, // Adjust font size
            },
            "& a::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: "50%",
              width: "5px", // Vertical line width
              height: "100%", // Vertical line height
              backgroundColor: "purple", // Line color
              transform: "translateY(-50%)", // Center line vertically
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center horizontally
              textAlign: "center", // Center text content
              position: "relative", // To move the box up
              top: { sm: "-30px" },
            }}
          >
            {/* First Typography - Borås Kristna Center */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: {
                  xs: 700, // Lighter font weight for small screens (mobile devices)
                  sm: 900, // Default font weight for larger screens
                },
                fontSize: {
                  xs: "2rem", // Smaller font size for small screens (mobile devices)
                  sm: "5rem", // Default font size for larger screens (tablets and up)
                },
                lineHeight: {
                  xs: "0.5em", // Smaller font size for small screens (mobile devices)

                  sm: "1em", // Default font size for larger screens (tablets and up)
                },
                color: "white",

                marginBottom: "30px",
              }}
            >
              Borås Kristna Center
            </Typography>

            {/* Second Typgraph and links - contant, new here */}

            <Box
              sx={{
                marginTop: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Align links to the left
                textAlign: "left", // Ensure text aligns left
                width: "100%", // Take full width so alignment works properly
                maxWidth: "400px", // You can adjust max width for better control
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  lineHeight: "1.5em",
                  color: "transparent",
                  WebkitTextStroke: "2px #ffffff",
                  textTransform: "uppercase",

                  marginBottom: "50px",
                  fontSize: {
                    xs: "1rem", // Smaller font size for small screens (mobile devices)
                    sm: "1.5rem", // Default font size for larger screens (tablets and up)
                  },
                }}
              >
                A place to worship
                <br />
                A place to pray
                <br />A place to learn the words
              </Typography>
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                New Here
              </Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/contact"
              >
                Contact Us
              </Link>
              {/* Find Us link with onClick */}
              <FaMapMarkerAlt
                onClick={handleOpenMap}
                style={{ fontSize: "2rem", color: "white", cursor: "pointer" }}
              />

              {/* Open Google Map component */}
              <Dialog
                open={openMap}
                onClose={handleCloseMap}
                maxWidth="md"
                fullWidth
                style={{ color: "white", textDecoration: "none" }}
              >
                <DialogContent>
                  <Map />
                </DialogContent>
              </Dialog>
            </Box>
          </Box>
        </Grid>

        <Grid
          sx={{
            marginTop: {
              xs: "10px", // Apply 10px margin on small screens (mobile devices)
              sm: "350px", // Apply 350px margin on larger screens (tablets and up)
            },
          }}
          size={{ xs: 12, sm: 3 }}
        >
          <RowAndColumnSpacing />
        </Grid>

        {/* Rolling Section */}
        {/* <Grid
          container
          alignItems="center"
          sx={{
            width: {
              xs: "100%", // Full width on small screens
              sm: "350px", // Adjust width for tablets
              md: "450px", // Width for larger screens
            },
            height: {
              xs: "200px", // Adjust height for small screens
              sm: "400px", // Tablet height
              md: "350px", // Desktop height
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
        <Grid></Grid> */}
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
              padding: "10px",
            }}
          >
            Comming Events
          </Typography>
        </Box>
        <Box sx={{ width: "80%" }}>
          <Carousel events={comingEvents} />
        </Box>
      </Box>
      {/* --------------ACTIVITIES----------- */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
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
        <Grid container spacing={2} justifyContent="center">
          <Grid size={{ xs: 12, sm: 6 }}>
            <InforCard
              category="Social Media"
              title="All activities on Social media"
              subtitle="Follow our social media"
              content="Under höstens tre första veckor (36-38) kommer vi uppmuntra till bön och fasta.Under höstens tre Under höstens tre Under höstens tre Under höstens tre tre Under höstens tre - auto updating activies from our social media"
              buttonText="Learn More"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "10px", // Adjust spacing between icons
                paddingTop: "10px", // Space above the icons
                paddingLeft: "10px",
              }}
            >
              <SocialIcon
                url="https://youtube.com"
                network="youtube"
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
              justifyContent: "center",
              overflow: "hidden",
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
              src={Worship}
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
              subtitle="välkommen till vår kyrka nu på söndag!"
              content="Veckans höjdpunkt i kyrkan är våra gudstjänster! Varje söndag klockan 11 träffas vi i Borås Kristna Center och firar gudstjänst. Syftet är att upphöja och ära Gud tillsammans. Våra gudstjänster är öppna för alla och vi vill vara tydliga med allt vi gör, så att alla kan förstå.
              Våra gudstjänster innehåller bön och lovsång, predikan och förbön. Givetvis avslutar vi med ett fantastiskt kyrkfika. För dig som besöker oss för första gången är fikat dessutom helt gratis!"
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
              title="Sunday School"
              subtitle="BKC-KIDS"
              content="BKC-Kids är för barn mellan 2-12 år. Barnens egen gudstjänst där vi tillsammans får möta spännande bibelpersoner, lyssna på Guds ord, lekar och tävlingar, vi äter korv och pysslar tillsammans. Kom med du också!"
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
              src={edward}
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
              title="Youth"
              subtitle="Bkc Ungdom"
              content="Vi kommer att leva, sova och äta på sommargården Solviken som ligger 5 km utanför Fristad precis vid sjön Ärtingen. Det finns tillgång till ca 20 sängplatser så för att alla säkert ska på plats kommer vi även att ställa upp husvagnar eller erbjuda möjlighet att tälta för er som är riktigt äventyrliga! Vill du inte övernatta utan bara vara med dagtid går detta också bra, skriv då detta i anmälan!"
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
              title="Find your community"
              subtitle="subtitle"
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
              marginBottom: "50px",
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

        {/* --------------NEWS SLIDES----------- */}
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
            News
          </Typography>
        </Grid>

        <Box
          sx={{
            backgroundColor: "#f0f4f8",
            width: "100%",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          <PauseOnHover events={news} />
        </Box>
      </Box>

      {/* --------------Events card---------- */}
      {/* <Box
        sx={{
          width: "100%",
          paddingTop: 2, // Padding at the top
          paddingBottom: 2, // Padding at the bottom
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f4f8",
        }}
      >
        <Grid
          container
          spacing={2} // Add spacing between items
          justifyContent="center"
        >
          {events.map((event, index) => (
            <Grid
              sx={{
                maxWidth: 380,
                display: "flex",
              }}
              size={{ xs: 12, sm: 3 }}
            >
              <EventCard
                key={index}
                time={event.time}
                title={event.title}
                image={event.image}
                description={event.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box> */}

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
