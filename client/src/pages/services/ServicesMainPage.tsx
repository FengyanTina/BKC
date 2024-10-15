import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import worshipHands from "../../assets/worshipHands.jpg";
import Map from "../../apis/googleMap/Map.tsx";
import { FaMapMarkerAlt } from "react-icons/fa";
import { prayerService, baptismService, sundayServiceSection } from "../../data.ts";
// import LiveService from "../../apis/youtube/LiveService.tsx";
import { SocialIcon } from "react-social-icons";
import ImgTextCard from "../../components/pageSections/cards/texAndImgCards/ImgTextCard.tsx";
import TextImgCard from "../../components/pageSections/cards/texAndImgCards/TextImgCard.tsx";
import SectionLine from "../../components/pageSections/SectionLine.tsx";
import BaptismSectionCard from "../../components/pageSections/cards/customizedCards/BaptismSectionCard.tsx";

export default function ServicesMainPage() {
  const [openMap, setOpenMap] = useState(false);

  const handleOpenMap = () => {
    setOpenMap(true);
  };
  const handleCloseMap = () => {
    setOpenMap(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          <Typography variant="h3" sx={{ color: "white", }}>
            Sunday services
          </Typography>
          <Typography variant="h6" sx={{ color: "white",marginTop: "10px" }}>
            Sunday 11:00-13:00
          </Typography>
          <Typography variant="h6" sx={{ color: "white",marginTop: "10px" }}>
            Albanoliden 5, vån 3, 50630 Borås{" "}
            <FaMapMarkerAlt
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
            style={{ color: "white", textDecoration: "none" }}
          >
            <DialogContent>
              <Map />
            </DialogContent>
          </Dialog>

          <Typography variant="h6" sx={{ color: "white", marginTop: "10px" }}>
            Live: Sunday 11:00 on Youtube
          </Typography>
          {/* <LiveService /> */}
          <Typography variant="h6" sx={{ color: "white",marginTop: "20px" }}>
            <a
              href="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter"
              style={{ color: "white" }}
            >
              {" "}
              Check All Services{" "}
            </a>
            <SocialIcon
              url="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter"
              network="youtube"
              style={{ height: 25, width: 25 }}
            />
          </Typography>
        </Grid>
      </Grid>
      {/* --------------SundayService ----------- */}
      <SectionLine text="Sunday Scervice" />

      <ImgTextCard
      id={sundayServiceSection.id}
        title={sundayServiceSection.title}
        subtitle={sundayServiceSection.subTitle}
        description={sundayServiceSection.description}
        images={sundayServiceSection.images}
      />

      {/* --------------PrayerService ----------- */}
      <SectionLine text="Prayer Services" />

      <TextImgCard
      id={prayerService.id}
        title={prayerService.title}
        linkSubtitle={prayerService.linkSubtitle}
        description={prayerService.description}
        images={prayerService.images}
      />

      {/* -------------BaptismService----------- */}
      <SectionLine text="Baptism Scervices" />
      <BaptismSectionCard
        title={baptismService.title}
        steps={baptismService.steps}
        image={baptismService.image}
      />

      {/* <Box sx={{ flexGrow: 1 }}>
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
                alignItems: "start", // Center horizontally
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
                  textAlign: "left", // Align text in the center
                  maxHeight: { lg: "350px", md: "100px", sm: "100px" },
                  overflowY: "auto", // Enable scroll if text is too long
                  px: 3, // Padding for left and right space
                  lineHeight: 2,
                }}
              >
                <strong>Step2:</strong> After you register, you will receive a
                follow-up email with a video explaining the meaning and
                significance of water baptism.
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
      </Box> */}

      {/*******YoutubeVideoLink***********/}
      <SectionLine text="Service Videos" />

      {/* <YouTubePlaylists/>     */}
      <Box sx={{ marginBottom: "40px", marginTop: "20px" }}>
        <Typography
          variant="h5"
          sx={{
            color: "black",
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "40px",
          }}
        >
          <a href="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter">
            {" "}
            Check Our Preachings on Youtube{" "}
          </a>{" "}
          <SocialIcon
            url="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter"
            network="youtube"
            style={{ height: 30, width: 30 }}
          />
        </Typography>
      </Box>
    </Box>
  );
}
