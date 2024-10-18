import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Worship from "../assets/Worship.jpeg";
import Carousel from "../components/common/slides/Carousel.tsx";
import { Link } from "react-router-dom";
import PauseOnHover from "../components/common/slides/SlickSlider";
import { useState } from "react";
import Map from "../apis/googleMap/Map.tsx";
import { FaMapMarkerAlt } from "react-icons/fa";
import CurrentWeekEventCalendar from "../components/common/CurrentWeekEventCalendar";
import { comingEvents } from "../data.ts";
import {
  news,
  sundayServiceCardInfor,
  sundaySchoolActivityCardInfor,
  youthActivityCardInfor,
  homeGroupActivityCardInfor,
  socialMediaActivityCardInfor,
  newHere,
} from "../data.ts";
import SectionLine from "../components/pageSections/SectionLine.tsx";
import ImgInforCard from "../components/pageSections/cards/InforCardImgSections/ImgInforCard.tsx";
import ActivitySocialMediaScetionCard from "../components/pageSections/cards/customizedCards/ActivitySocialMediaScetionCard.tsx";
import NewHereSectionGrid from "../components/pageSections/grid/NewHereSectionGrid.tsx";

export default function StartPage() {
  const [openMap, setOpenMap] = useState(false);

  const handleOpenMap = () => {
    setOpenMap(true);
  };
  const handleCloseMap = () => {
    setOpenMap(false);
  };
  return (
    <Box >
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
         height:"100%",
          backgroundAttachment: "fixed",
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
              marginTop: { xs: "100px",  },
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

            <Box
              sx={{
                marginTop: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Align links to the left
                textAlign: "left", // Ensure text aligns left
                width: "100%", // Take full width so alignment works properly
                maxWidth: {
                    md:"400px",
                    sm:"300px",
                    xs:"200px",
                }
                 // You can adjust max width for better control
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
                <br />A place to learn the word
              </Typography>
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                About Us
              </Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/contact"
              >
                Find Us
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
            maxWidth: {
                xs: "90%", 
                sm: "90%", 
              },
            marginTop: {
              xs: "10px", 
              sm: "340px", 
            },
            height: {
              xs: "40vh", 
              sm: "50vh", 
              md: "50vh", 
              lg: "60vh",
            },
            marginBottom: {
              md: "10px",
              sm:"10px",
              xs:"10px",
            },
            overflowY: "auto",
          }}
          size={{ xs: 12, sm: 12, md: 3 }}
        >
          <CurrentWeekEventCalendar />
        </Grid>
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
          marginBottom: "30px",
        }}
      >
        {/* --------------COMMING EVENTS----------- */}

        <SectionLine text="Comming Events" useWhiteStroke={true} />
        <Box sx={{ width: "80%" }}>
          <Carousel events={comingEvents} />
        </Box>

        {/* --------------WELCOME NEW----------- */}
        <SectionLine text="Welcome" useWhiteStroke={true} />
        <NewHereSectionGrid
        id={newHere.id}
          title={newHere.title}
         description={newHere.description}
          images={newHere.images}
          subtitle={newHere.subtitle}
        />
      </Box>
      {/* --------------ACTIVITIES----------- */}

      <SectionLine text=" Activities And Services" />
      <ActivitySocialMediaScetionCard
      id={socialMediaActivityCardInfor.id}
        title={socialMediaActivityCardInfor.title}
        subtitle={socialMediaActivityCardInfor.subtitle}
        description={socialMediaActivityCardInfor.description}
        images={socialMediaActivityCardInfor.images}
        category={socialMediaActivityCardInfor.category}
      />

      {/* --------------ACTIVITIES-Sunday Service----------- */}
      <ImgInforCard
      id={sundayServiceCardInfor.id}
        title={sundayServiceCardInfor.title}
        subtitle={sundayServiceCardInfor.subtitle}
        description={sundayServiceCardInfor.description}
        images={sundayServiceCardInfor.images}
        category={sundayServiceCardInfor.category}
        imageLeft={false}
      />

      {/* --------------ACTIVITIES-BKC Kids----------- */}
      <ImgInforCard
      id={sundaySchoolActivityCardInfor.id}
        title={sundaySchoolActivityCardInfor.title}
        subtitle={sundaySchoolActivityCardInfor.subtitle}
        description={sundaySchoolActivityCardInfor.description}
        images={sundaySchoolActivityCardInfor.images}
        category={sundaySchoolActivityCardInfor.category}
        
      />
      {/* --------------ACTIVITIES-Youth----------- */}
      <ImgInforCard
      id={youthActivityCardInfor.id}
        title={youthActivityCardInfor.title}
        subtitle={youthActivityCardInfor.subtitle}
        description={youthActivityCardInfor.description}
        images={youthActivityCardInfor.images}
        category={youthActivityCardInfor.category}
        imageLeft={false}
      />

      {/* --------------ACTIVITIES-Home Group----------- */}
      <ImgInforCard
      id={homeGroupActivityCardInfor.id}
        title={homeGroupActivityCardInfor.title}
        subtitle={homeGroupActivityCardInfor.subtitle}
        description={homeGroupActivityCardInfor.description}
        images={homeGroupActivityCardInfor.images}
        category={homeGroupActivityCardInfor.category}
       
      />
      {/* --------------NEWS SLIDES----------- */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#f0f4f8",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
       <SectionLine text=" News" />
        <Box
          sx={{
            backgroundColor: "#f0f4f8",
            width: "100%",
            marginBottom: "10px",
          }}
        > 
          <PauseOnHover events={news} />
        </Box>
      </Box>
    </Box>
  );
}
