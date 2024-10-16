import { useEffect, useRef, useState } from "react";
import { User } from "../../models/User";
import { Box, Button, Link, Modal, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import IntroCard from "../../components/common/cards/IntroCard";
import { Pastor } from "../../data";
import SectionLine from "../../components/pageSections/SectionLine";
import UserTable from "../../components/common/Tables/userTable";



const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
const AboutUsPage = () => {
 
    
  
    useEffect(() => {
        // Scroll to the user table when the component mounts
        // const hash = window.location.hash;
        // if (hash) {
        //   const element = document.getElementById(hash.substring(1));
        //   if (element) {
        //     element.scrollIntoView({ behavior: "smooth" });
        //   }
        // }
        const hash = window.location.hash;
        if (hash) {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            // Jump directly to the target element's offset position
            const yOffset = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: yOffset, behavior: 'auto' }); // Use 'auto' for no smooth scrolling
          }
        }
      }, []);
  


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
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 11, // Limit to 7 lines
              position: 'relative',
            }}
          >
                {/* Directly using Box to prevent wrapping issues with Typography */}
                {Pastor.content.split('\n').map((paragraph, index) => (
                    <Box key={index} sx={{ display: 'block', mb: 2 }}>
                        <Typography variant="body1">{paragraph}</Typography>
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
              onClick={handleOpen} 
              sx={{ cursor: 'pointer', marginTop: 1 }}
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              Read More
            </Link>
          </Box>
        </Grid>
        <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-title" variant="h4" >
                        {Pastor.title}
                    </Typography>
                    <Typography variant="h5">
                        {Pastor.subTitle}
                        </Typography>

                    <Box sx={{ mt: 2 }}>
                        {/* Displaying full content in modal */}
                        {Pastor.content.split('\n').map((paragraph, index) => (
                            <Box key={index} sx={{ display: 'block', mb: 2 }}>
                                {paragraph}
                            </Box>
                        ))}
                    </Box>
                    <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained">
                        Close
                    </Button>
                </Box>
            </Modal>
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
        <IntroCard title= {Pastor.title} subTitle={Pastor.subTitle} content={Pastor.content} image={Pastor.image} onOpen={handleOpen}/>
        <IntroCard title= {Pastor.title} subTitle={Pastor.subTitle} content={Pastor.content} image={Pastor.image} onOpen={handleOpen}/>
        <IntroCard title= {Pastor.title} subTitle={Pastor.subTitle} content={Pastor.content} image={Pastor.image} onOpen={handleOpen}/>
      </Box>
      <SectionLine text="Our History"/>
      <Box
        sx={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
        id="userTable"
        
      >
        <SectionLine text="Membership Mangement"/>
        <Box sx={{with:'60%'}} >

        </Box>
        
        <UserTable />
      </Box>


    </Box>
  );
};

export default AboutUsPage;
