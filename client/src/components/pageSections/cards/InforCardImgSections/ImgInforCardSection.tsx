import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ImageGallary from "../../../common/ImageGallary";
import PageInforCard from "../../../common/cards/PageInforCard";
import { ImageInforSectionModel } from "../../../../models/ImageInforSection.ts";


const ImgInforCardSection

 = ({ inforSectionId,title, category, subtitle, description, images,imageLeft = true,buttonLink }: ImageInforSectionModel) => {
    const renderImageGallery = () => {
        if (Array.isArray(images)) {
          return (
            <ImageGallary
              itemData={images
                .filter((img): img is string => typeof img === "string") // Ensure img is a string
                .map((img) => ({ img }))} // Map to the required format
              showAllAsFeatured={true}
            />
          );
        }
    
        return (
          <img
            src={images}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />
        );
      };
    
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
        padding: "20px",
        backgroundColor: "#f0f4f8",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        {/* <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{
            maxWidth: 500,
            height: 350,
            transform: "translateZ(0)",
          }}
        >
           
           {Array.isArray(images) ? (
            <ImageGallary
            itemData={
                Array.isArray(images)
                  ? images
                      .filter((img): img is string => typeof img === "string") // Ensure img is a string
                      .map((img) => ({ img })) // Map to the required format
                  : typeof images === "string"
                  ? [{ img: images }] // If image is a single string, wrap it in an array
                  : [] // In case image is neither a string nor an array of strings
              }
              showAllAsFeatured={true}
          />
          ) : (
            // Otherwise, render a single image
            <img
              src={images}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          )}
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InforCard
            category={category}
            title={title}
            subtitle={subtitle}
            description={description}
            buttonText="Learn More"
          />
        </Grid> */}
{/*         
        {imageLeft ? (
          <>
            <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
              maxWidth: 500,
              height: 350,
              transform: "translateZ(0)",
             
            }}
              
            >
              {renderImageGallery()}
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <InforCard
                category={category}
                title={title}
                subtitle={subtitle}
                description={description}
                buttonText="Learn More"
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid size={{ xs: 12, sm: 6 }}>
              <InforCard
                category={category}
                title={title}
                subtitle={subtitle}
                description={description}
                buttonText="Learn More"
              />
            </Grid>
            <Grid
               size={{ xs: 12, sm: 6 }}
               sx={{
                 maxWidth: 500,
                 height: 350,
                 transform: "translateZ(0)",
               }}
            >
              {renderImageGallery()}
            </Grid>
          </>
        )} */}
        <Grid
  container
  spacing={2} // Add some spacing between the grids
  sx={{
    flexDirection: {
      xs: "column-reverse", // Stack vertically and reverse order so the image is always on the right (i.e., after the content) on xs
      sm: imageLeft ?  "row-reverse" :"row", // On sm and above, follow the imageLeft logic
    },
    alignItems: "center", // Align items vertically for better presentation
    justifyContent: "space-between", // Space the image and content evenly
  }}
>
  {/* Content Grid */}
  <Grid
    size={{ xs: 12, sm: 6 }}
    sx={{
      display: "flex",
      flexDirection: "column", // Stack the text content vertically
      justifyContent: "center", // Vertically center the content
    }}
  >
    <PageInforCard
    id={inforSectionId}
      category={category}
      title={title}
      subtitle={subtitle}
      description={description}
      buttonText="Learn More"
      buttonLink={buttonLink}
    />
  </Grid>

  {/* Image Grid */}
  <Grid
    size={{ xs: 12, sm: 6 }}
    sx={{
      maxWidth: 500,
      height: 350,
      display: "flex", // To ensure it's flexible and responsive
      justifyContent: "center", // Center on small screens
      transform: "translateZ(0)",
    }}
  >
    {renderImageGallery()}
  </Grid>
</Grid>

      </Grid>
    </Box>
  );
};

export default ImgInforCardSection;
