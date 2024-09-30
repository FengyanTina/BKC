import { Box, styled, Typography } from '@mui/material';
import  Grid  from '@mui/material/Grid2';
import React from 'react'
import ImageGallary from '../../common/ImageGallary';

type Props = {
    title:string;
    subTitle?:string;
    description:string;
    image: string | string[]; // Accept either a single string or an array of strings for images
    date?: Date;
    linkSubtitle?:string;
    location?:string;
}
const Item = styled("div")(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
  
    ...theme.applyStyles("dark", {}),
  }));
const ImgTextCard = ({title,subTitle,description,image,date,location, linkSubtitle}: Props) => {
  return (
    <Box sx={{ flexGrow: 1,width:'80%', }}>
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 1, sm: 12, md: 12 }}
        >
            
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Item>
            {Array.isArray(image) ? (
              // If it's an array, map through it to render multiple images
            //   image.map((imgSrc, index) => (
            //     <img
            //       key={index}
            //       src={imgSrc}
            //       alt={`Image ${index + 1}`}
            //       style={{ width: "100%", marginBottom: "10px" }} // Add margin if you want some space between images
            //     />
            //   ))
            <ImageGallary itemData={image.map(img => ({ img: img }))}/>
            ) : (
              // Otherwise, render a single image
              <img src={image} style={{ width: "100%" }} alt="" />
            )}
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
                fontSize:{
                    lg: 20, md: 16, sm: 18
                 },
              }}
            >
             {title}
            </Typography>
            {linkSubtitle &&(
         <Typography
          variant="h4"
          sx={{
            textAlign: "center", // Align the text to the center
            mx: "auto", // Horizontal margin to center it within the container
            px: 3, // Add padding on the sides
            mt: 5,
          }}
        >
          <a href="">{linkSubtitle}</a>
        </Typography>   
        )}
            {subTitle && (
                <Typography
                variant="h4"
                sx={{
                  textAlign: "center", // Align the text to the center
                  mx: "auto", // Horizontal margin to center it within the container
                  px: 3, // Add padding on the sides
                  mt: 5,
                  fontSize:{
                    lg: 30, md: 20, sm: 16
                 },
                }}
              >
                {subTitle}
              </Typography> 
            )}
          
            <Box
              sx={{
                display: "flex", // Make it a flex container

                alignItems: "center", // Center horizontally
                justifyContent: "center", // Center vertically
                alignContent: "center",
                mt: 5, // Optional margin top if needed
              // Match the max height to prevent too much height difference
                overflowY: "auto",
                "@media (max-width: 1430px)": {
                  maxHeight: "200px", // Cap the height at 1330px width
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  textAlign: "left", // Align text in the center
                  maxHeight: { lg: "350px", md: "80px", sm: "80px" },
                  fontSize:{
                     lg: 20, md: 14, sm: 12
                  },
                  overflowY: "auto", // Enable scroll if text is too long
                  px: 3, // Padding for left and right space
                }}
              >
                {description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
  )
}
export default ImgTextCard;