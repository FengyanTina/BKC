import { Box, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ImageGallary from "../../../common/ImageGallary";
import "./imageText.css";
import { ImageInforSectionModel } from "../../../../models/ImageInforSection";
import { PageInforModel } from "../../../../models/PageInforModel";
import PageTextPart from "./PageText";

const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",

  ...theme.applyStyles("dark", {}),
}));
const ImgTextSection = ({
  inforSectionId,
  title,
  subtitle,
  description,
  images,
  linkSubtitle,
  imageLeft = true,
}: ImageInforSectionModel) => {
  const renderImage = () => {
    if (Array.isArray(images)) {
      return <ImageGallary itemData={images.map((img) => ({ img: img }))} />;
    }

    return (
      <div
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden", // Prevent overflow
        }}
      >
        <img src={images} className="image-responsive" alt="" />
      </div>
    );
  };
  return (
    <Box sx={{ flexGrow: 1, width: "80%" }}>
      <Grid
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 1, sm: 12, md: 12 }}
      >
        {imageLeft ? (
          <>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Item>{renderImage()}</Item>
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
              {PageTextPart({ id: inforSectionId, title, subtitle, description, linkSubtitle })}
            </Grid>
          </>
        ) : (
          <>
            <Grid
              size={{ xs: 12, sm: 12, md: 6 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start", // Ensures that the `h3` stays at the top
                height: "100%", // Full height grid for vertical centering
              }}
            >
              {PageTextPart({ id: inforSectionId, title, subtitle, description, linkSubtitle })}
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Item>{renderImage()}</Item>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};
// const renderTextPart = ({
//     title,
//     subtitle,
//     description,
//     linkSubtitle,
//   }: PageInforModel
 
// ) => (
//   <>
//     <Typography
//       variant="h3"
//       sx={{
//         textAlign: "center", // Align the text to the center
//         mx: "auto", // Horizontal margin to center it within the container
//         px: 3, // Add padding on the sides

//         fontSize: {
//           lg: "40px",
//           md: "30px",
//           sm: "30px",
//           xs: "28px", // Adjust font size on smaller screens
//         },
//       }}
//     >
//       {title}
//     </Typography>
//     {linkSubtitle && (
//       <Typography
//         variant="h4"
//         sx={{
//           textAlign: "center", // Align the text to the center
//           mx: "auto", // Horizontal margin to center it within the container
//           px: 3, // Add padding on the sides
//           mt: 2,
//           marginBottom: "10px", // Add margin to separate from description
//           fontSize: {
//             lg: "30px",
//             md: "22px",
//             sm: "22px",
//             xs: "20px", // Adjust font size for small screens
//           },
//         }}
//       >
//         <a
//           href=""
//           style={{
//             fontSize: "inherit", // Inherit the font size from Typography
//           }}
//         >
//           {linkSubtitle}
//         </a>
//       </Typography>
//     )}
//     {subtitle && (
//       <Typography
//         variant="h4"
//         sx={{
//           textAlign: "center", // Align the text to the center
//           mx: "auto", // Horizontal margin to center it within the container
//           px: 3, // Add padding on the sides
//           mt: 3,
//           marginBottom: "10px",
//           fontSize: {
//             lg: "30px",
//             md: "22px",
//             sm: "22px",
//             xs: "20px", // Adjust font size for smaller screens
//           },
//         }}
//       >
//         {subtitle}
//       </Typography>
//     )}

//     <Box
//       sx={{
//         display: "flex", // Make it a flex container
//         mt: 3,
//         alignItems: "center", // Center vertically
//         justifyContent: "center", // Center horizontally
//         marginTop: "10px",
//         marginbottom: "10px",
//         minHeight: "200px", // Ensure the text grid is at least as tall as the image grid
//         maxHeight: "300px", // Match the max height to prevent too much height difference
//         overflowY: "auto", // Enable scrolling if the text overflows
//         "@media (max-width: 900px)": {
//           minHeight: "200px", // Adjust height for smaller screens
//           maxHeight: "300px",
//         },
//       }}
//     >
//       <Typography
//         variant="h5"
//         sx={{
//           textAlign: "left", // Align text to the left
//           fontSize: {
//             lg: "25px",
//             md: "20px",
//             sm: "20px",
//             xs: "18px", // Adjust font size for smaller screens
//           },
//           lineHeight: 1.5,
//           px: 3, // Padding for left and right space
//           overflowY: "auto", // Enable scroll if text is too long
//         }}
//       >
//         {description}
//       </Typography>
//     </Box>
//   </>
// );

export default ImgTextSection;
