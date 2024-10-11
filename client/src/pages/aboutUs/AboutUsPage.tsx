import React, { useState } from "react";
import { User } from "../../modals/User";
import { Box, Link, Paper, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import IntroCard from "../../components/common/cards/IntroCard";
import ImgInforCard from "../../components/pageSections/cards/InforCardImgSections/ImgInforCard";
import { Pastor } from "../../data";
import SectionLine from "../../components/pageSections/SectionLine";

type Props = {};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
const AboutUsPage = (props: Props) => {
  const deleteUser = (userName: string) => {
    let storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // Remove the user from the array
    storedUsers = storedUsers.filter(
      (user: User) => user.userName !== userName
    );

    // Save the updated array back to localStorage
    localStorage.setItem("users", JSON.stringify(storedUsers));
  };

  const [modalOpen, setModalOpen] = useState(false); // State for modal visibility

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <Box
      sx={{
        marginTop: "150px",
        backgroundColor: "#f0f4f8",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: {
            md: "row",
            sm: "column",
          },
          marginBottom: "50px",
          width: "80%", // Set the width to 80% of the screen
          margin: "0 auto", // Center it horizontally
          alignItems: "stretch", // Ensure both the image and text grid have the same height
          flexGrow: "1",
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <img
            style={{
              width: "100%", // Make the image take up full width of its container
              height: "auto", // Maintain aspect ratio
              maxWidth: "600px", // Set a maximum width so it doesn't get too large
              objectFit: "cover", // Ensure the image fills the area without distortion
            }}
            src={Pastor.image}
            alt=""
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column", // Stack elements vertically
            justifyContent: "space-between", // Space between the title/content and "Read More" button
          }}
          size={{ xs: 12, md: 6 }}
        >
          <Typography variant="h2">{Pastor.title}</Typography>
          <Typography
            sx={{
              marginTop: "10px",
              // This makes the content expand to fill the available space
            }}
            variant="h4"
          >
            {Pastor.subTitle}
          </Typography>
          <Box
            sx={{
              marginTop: "20px",
              flexGrow: 1, // This makes the content expand to fill the available space
              display: '-webkit-box',
              overflow: 'auto',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 7, // Limit to 7 lines
              mb: 1,
            }}
          >
             {Pastor.content.split('\n').map((paragraph, index) => (
            <Box sx={{ display: 'block', mb: 2 }} key={index} mb={2}> {/* Adding margin bottom for spacing between paragraphs */}
                {paragraph}
            </Box>
        ))}
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Typography variant="body1">
              <Link
                href="https://your-blog-link.com"
                target="_blank"
                rel="noopener"
                underline="hover"
              >
                Visit Blog
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href="https://facebook.com/your-facebook-profile"
                target="_blank"
                rel="noopener"
                underline="hover"
              >
                Follow on Facebook
              </Link>
            </Typography>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Link
              href="https://your-blog-link.com"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              Read More
            </Link>
          </Box>
        </Grid>

        {/* <ImgInforCard title= {Pastor.title} subTitle={Pastor.subTitle} content={Pastor.content} image={Pastor.image}/> */}
      </Grid>
      <SectionLine text="Leadership" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: {
            md: "row",
            sm: "column",
          },
          gap: "50px",
        }}
      >
        <IntroCard />
        <IntroCard />
        <IntroCard />
      </Box>
      <Box
        sx={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">MemberMangement</Typography>
      </Box>
    </Box>
  );
};

export default AboutUsPage;
