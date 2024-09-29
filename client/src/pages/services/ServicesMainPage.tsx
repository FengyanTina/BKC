import {
  Box,
  Dialog,
  DialogContent,
  Paper,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import YouTubePlaylists from "../../apis/youtube/PlayList.tsx";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import PrayerBible from "../../assets/spiritual-prayer-hands-holding-bible.jpg";
import worshipHands from "../../assets/worshipHands.jpg";
import edward from "../../assets/edward.jpg";
import BethelWorship from "../../assets/BethelWorship.jpg";
import Worship from "../../assets/Worship.jpeg";
import Conference from "../../assets/Conference.jpg";
import Mission from "../../assets/Mission.png";
import Prayer from "../../assets/Prayer.jpg";
import Bible from "../../assets/Bible.jpg";
import Map from "../../apis/googleMap/Map.tsx";
import { FaMapMarkerAlt } from "react-icons/fa";
import { sundayService } from "../../data.ts";
import { prayerService } from "../../data.ts";
import LiveService from "../../apis/youtube/LiveService.tsx";
import { SocialIcon } from "react-social-icons";

const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",

  ...theme.applyStyles("dark", {}),
}));
export default function ServicesMainPage() {
  const [openMap, setOpenMap] = useState(false);

  const handleOpenMap = () => {
    setOpenMap(true);
  };
  const handleCloseMap = () => {
    setOpenMap(false);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
        flexGrow: 1,
      }}
    >
      {/* --------------SundayService First Section----------- */}
      <Grid
        container
        sx={{
          backgroundImage: `url(${worshipHands})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: { md: "flex-end", sm: "center", xs: "center" },
          width: "100%", // Full width of the container
          height: "100vh", // Full viewport height
          backgroundAttachment: "fixed",
        }}
      >
        <Grid size={{ xs: 6, md: 10 }}>
          <Typography variant="h3" sx={{ color: "white" }}>
            Sunday services
          </Typography>
          <Typography variant="h6" sx={{ color: "white" }}>
            Sunday 11:00-13:00
          </Typography>
          <Typography variant="h6" sx={{ color: "white" }}>
            Albanoliden 5, vån 3, 50630 Borås <FaMapMarkerAlt
            onClick={handleOpenMap}
            style={{ fontSize: "2rem", color: "white", cursor: "pointer" }}
          />
          </Typography>
          

          {/* Open Google Map component */}
          <Dialog
            open={openMap}
            onClose={handleCloseMap}
            maxWidth="md"
            fullWidth
            style={{ color: "white", textDecoration: "none", }}
          >
            <DialogContent>
              <Map />
            </DialogContent>
          </Dialog>
          <Typography variant="h6" sx={{ color: "white",marginTop:'10px' }}>
            Live: Sunday 11:00 on Youtube
          </Typography>
          <LiveService/>
          <Typography variant="h6" sx={{ color: "white" }}>
            Check All Teachings  <SocialIcon
                url="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter"
                network="youtube"
                style={{ height: 25, width: 25 }}
              />
          </Typography>
         
        </Grid>
      </Grid>
      {/* --------------SundayService MiddleLine----------- */}
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
            lineHeight: "2em",
            color: "transparent",
            //WebkitTextStroke: "1px #ffffff",
            WebkitTextStroke: "1px #d3d3d3",
            textTransform: "uppercase",
            padding: "10px",
          }}
        >
          Sunday Scervices
        </Typography>
      </Box>
      {/* --------------SundayService Intro----------- */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 1, sm: 12, md: 12 }}
        >
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Item>
              <img src={sundayService.imageName} style={{ width: "100%" }} alt="" />
            </Item>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start", // Ensures that the `h3` stays at the top
              height: "100%", // Full height grid for vertical centering
            }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center", // Align the text to the center
                mx: "auto", // Horizontal margin to center it within the container
                px: 3, // Add padding on the sides
              }}
            >
             {sundayService.title}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center", // Align the text to the center
                mx: "auto", // Horizontal margin to center it within the container
                px: 3, // Add padding on the sides
                mt: 5,
              }}
            >
              {sundayService.subTitle}
            </Typography>
            <Box
              sx={{
                display: "flex", // Make it a flex container

                alignItems: "center", // Center horizontally
                justifyContent: "center", // Center vertically
                alignContent: "center",
                mt: 5, // Optional margin top if needed
                minHeight: "100px", // Ensure the text grid is at least as tall as the image grid
                maxHeight: "300px", // Match the max height to prevent too much height difference
                overflowY: "auto",
                "@media (max-width: 1430px)": {
                  maxHeight: "200px", // Cap the height at 1330px width
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center", // Align text in the center
                  maxHeight: { lg: "350px", md: "100px", sm: "100px" },
                  overflowY: "auto", // Enable scroll if text is too long
                  px: 3, // Padding for left and right space
                }}
              >
                {sundayService.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* --------------PrayerService MiddleLine----------- */}
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
            lineHeight: "2em",
            color: "transparent",
            //WebkitTextStroke: "1px #ffffff",
            WebkitTextStroke: "1px #d3d3d3",
            textTransform: "uppercase",
            padding: "10px",
          }}
        >
          Prayer Scervices
        </Typography>
      </Box>
       {/* --------------PrayerService Intro----------- */}
       <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 1, sm: 12, md: 12 }}
        >
          
          <Grid
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start", // Ensures that the `h3` stays at the top
              height: "100%", // Full height grid for vertical centering
            }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center", // Align the text to the center
                mx: "auto", // Horizontal margin to center it within the container
                px: 3, // Add padding on the sides
              }}
            >
             {prayerService.title}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center", // Align the text to the center
                mx: "auto", // Horizontal margin to center it within the container
                px: 3, // Add padding on the sides
                mt: 5,
              }}
            >
              <a href="">send in your prayer requiest any time</a>
            </Typography>
            <Box
              sx={{
                display: "flex", // Make it a flex container

                alignItems: "center", // Center horizontally
                justifyContent: "center", // Center vertically
                alignContent: "center",
                mt: 5, // Optional margin top if needed
                minHeight: "100px", // Ensure the text grid is at least as tall as the image grid
                maxHeight: "300px", // Match the max height to prevent too much height difference
                overflowY: "auto",
                "@media (max-width: 1430px)": {
                  maxHeight: "200px", // Cap the height at 1330px width
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center", // Align text in the center
                  maxHeight: { lg: "350px", md: "100px", sm: "100px" },
                  overflowY: "auto", // Enable scroll if text is too long
                  px: 3, // Padding for left and right space
                }}
              >
                {prayerService.description}
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Item>
              <img src={sundayService.imageName} style={{ width: "100%" }} alt="" />
            </Item>
          </Grid>
        </Grid>
      </Box>
      {/* -------------Baptism MiddleLine----------- */}
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
            lineHeight: "2em",
            color: "transparent",
            WebkitTextStroke: "1px #d3d3d3",
            textTransform: "uppercase",
            padding: "10px",
          }}
        >
          Baptism Scervices
        </Typography>
      </Box>
      {/* -------------Baptism Intro----------- */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 1, sm: 12, md: 12 }}
        >
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Item>
              <img src={Mission} style={{ width: "100%" }} alt="" />
            </Item>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start", // Ensures that the `h3` stays at the top
              height: "100%", // Full height grid for vertical centering
            }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center", // Align the text to the center
                mx: "auto", // Horizontal margin to center it within the container
                px: 3, // Add padding on the sides
              }}
            >
              If you would like to be baptized, follow these simple steps.
            </Typography>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center", // Align the text to the center
                mx: "auto", // Horizontal margin to center it within the container
                px: 3, // Add padding on the sides
                mt: 5,
              }}
            ></Typography>
            <Box
              sx={{
                display: "flex", // Make it a flex container
                flexDirection: "column", // Stack items
                alignItems:'start', // Center horizontally
                justifyContent: "center", // Center vertically

                mt: 5, // Optional margin top if needed
                minHeight: "100px", // Ensure the text grid is at least as tall as the image grid
                maxHeight: "300px", // Match the max height to prevent too much height difference
                overflowY: "auto",
                "@media (max-width: 1430px)": {
                  maxHeight: "200px", // Cap the height at 1330px width
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center", // Align text in the center
                  maxHeight: { lg: "350px", md: "100px", sm: "100px" },
                  overflowY: "auto", // Enable scroll if text is too long
                  px: 3, // Padding for left and right space
                  lineHeight: 2,
                }}
              >
                <strong>Step1:</strong>:<a href="http://">Register You</a>
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  textAlign:'left', // Align text in the center
                  maxHeight: { lg: "350px", md: "100px", sm: "100px" },
                  overflowY: "auto", // Enable scroll if text is too long
                  px: 3, // Padding for left and right space
                  lineHeight: 2,
                }}
              >
                <strong>Step2:</strong> After you register, you will receive a follow-up email
                with a video explaining the meaning and significance of water
                baptism.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center", // Align text in the center
                  maxHeight: { lg: "350px", md: "100px", sm: "100px" },
                  overflowY: "auto", // Enable scroll if text is too long
                  px: 3, // Padding for left and right space
                  lineHeight: 2,
                }}
              >
                <strong>Step3:</strong>: Schedule the baptism.
              </Typography>
            </Box>
          </Grid>
        
        </Grid>
      </Box>
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
            lineHeight: "2em",
            color: "transparent",
            WebkitTextStroke: "1px #d3d3d3",
            textTransform: "uppercase",
            padding: "10px",
          }}
        >
         Latest Service Videos
        </Typography>
      </Box>     
     <YouTubePlaylists/>    
    </Box>
  );
}
