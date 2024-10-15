import { Box, styled, Typography } from '@mui/material';
import  Grid  from '@mui/material/Grid2';
import ImageGallary from '../../../common/ImageGallary';
import  "./textImageText.css"
import { ImageTextCardModal } from '../../../../modals/ImageTex';

const Item = styled("div")(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
  
    ...theme.applyStyles("dark", {}),
  }));
const ImgTextCard = ({title,subtitle,description,images, linkSubtitle,imageLeft = true}: ImageTextCardModal ) => {
  return (
    <Box sx={{ flexGrow: 1,width:'80%', }}>
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 1, sm: 12, md: 12 }}
        >
            
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Item>
            {Array.isArray(images) ? (
  
            <ImageGallary itemData={images.map(img => ({ img: img }))}/>
            ) : (
              // Otherwise, render a single image
              <img src={images} style={{ width: '100%', objectFit: 'cover',maxHeight: '380px', }} alt="" />
            )}
            </Item>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
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
                    lg: 30, md: 28, sm: 25
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
            mt: 2,
          }}
        >
          <a href=""   
          style={{
            fontSize: window.innerWidth >= 1200 ? "25px" : window.innerWidth >= 960 ? "25px" : "20px",
          }}>{linkSubtitle}</a>
        </Typography>   
        )}
            {subtitle && (
                <Typography
                variant="h4"
                sx={{
                    textAlign: "center", // Align the text to the center
                    mx: "auto", // Horizontal margin to center it within the container
                    px: 3, // Add padding on the sides
                    mt: 3,
                    fontSize:{
                        lg: 25, md: 20, sm: 20
                     },
                  }}
              >
                {subtitle}
              </Typography> 
            )}
          
            <Box
               sx={{
                display: "flex", // Make it a flex container
                mt: 3,
                alignItems: "center", // Center horizontally
                justifyContent: "center", // Center vertically
                alignContent: "center",
               
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
                    textAlign: "left", // Align text in the center
                    maxHeight: { lg: "350px", md: "100px", sm: "100px" },
                    overflowY: "auto", // Enable scroll if text is too long
                    px: 3, // Padding for left and right space
                    fontSize:{
                        lg: 20, md: 20, sm: 18
                     },
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