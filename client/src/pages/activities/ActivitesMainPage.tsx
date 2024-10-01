import PauseOnHover from "../../components/common/slides/SlickSlider.tsx";
import worshipHands from "../../assets/worshipHands.jpg";
import edward from "../../assets/edward.jpg";
import BethelWorship from "../../assets/BethelWorship.jpg";
import Worship from "../../assets/Worship.jpeg";
import PrayerBible from "../../assets/spiritual-prayer-hands-holding-bible.jpg";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import InforCard from "../../components/common/cards/InforCard.tsx";
import { SocialIcon } from "react-social-icons";
import ImageGallary from "../../components/common/ImageGallary";
import { imageGallarytemData } from "../../data.ts";
const events = [
  {
    id: "1",
    time: new Date(2024, 9, 22, 14, 30), // October 22, 2024, 2:30 PM
    title: "Reaching out ",
    image: PrayerBible,
    description:
      "An exhibition featuring contemporary art pieces from local artists.",
  },
  {
    id: "2",
    time: new Date(2024, 9, 25, 19, 0), // October 25, 2024, 7:00 PM
    title: "Tech Conference",
    image: edward,
    description:
      "Join the biggest technology conference of the year with keynote speakers.",
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
export default function ActivitiesMainPage() {
  return (
    <Box style={{ marginTop: "80px" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f0f4f8",
          marginTop: "20px",
        }}
      >
        <Box style={{ paddingTop: "20px" }}>
          <PauseOnHover events={events} />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
          paddingTop: "30px",
          paddingBottom: "30px",
          backgroundColor: "#f0f4f8",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid sx={{ marginBottom: "50px" }}>
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
              subTitle="Follow our social media"
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
            <ImageGallary itemData={imageGallarytemData} />
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
              subTitle="välkommen till vår kyrka nu på söndag!"
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
              subTitle="BKC-KIDS"
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
              subTitle="Bkc Ungdom"
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
              subTitle="subtitle"
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
        <Box />
        <Box />
      </Box>
    </Box>
  );
}
