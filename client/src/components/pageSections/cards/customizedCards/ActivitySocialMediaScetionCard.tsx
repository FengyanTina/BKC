import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ImageGallary from "../../../common/ImageGallary";
import InforCard from "../../../common/InforCard";
import { SocialIcon } from "react-social-icons";
import { imageGallarytemData } from "../../../../data";
interface ImageGalleryProps{
    img:string;
    title?:string;
    featured?:boolean;
    author?:string;
}
type Props = {
    category?: string;
    title: string;
    subTitle?: string;
    content: string;
    buttonText?: string;
    time?: Date;
    image:string | ImageGalleryProps[];
}

const ActivitySocialMediaScetionCard = ({title,category,subTitle,content,buttonText,time,image}: Props) => {
  return (
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
               category={category}
               title={title}
               subTitle={subTitle}
               content={content}
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
                url="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter"
                network="youtube"
                style={{ height: 25, width: 25 }}
              />
              <SocialIcon
                url="https://www.instagram.com/boraskristnacenter/"
                network="instagram"
                style={{ height: 25, width: 25 }}
              />

              <SocialIcon
                url="https://www.facebook.com/BorasKristnaCenter/?locale=sv_SE"
                network="facebook"
                style={{ height: 25, width: 25 }}
              />
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
                maxWidth: 500,
        height: 400,
              transform: "translateZ(0)",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
              {Array.isArray(image) ? (
            <ImageGallary itemData={imageGallarytemData }/>
            ) : (
              // Otherwise, render a single image
              <img src={image} style={{ width: "100%",
                height: "100%",
                objectFit: "cover",  }} alt="" />
            )}
            
          </Grid>
        </Grid>
      </Box>
  )
}

export default ActivitySocialMediaScetionCard