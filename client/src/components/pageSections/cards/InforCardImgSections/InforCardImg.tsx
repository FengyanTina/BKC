// import { Box } from "@mui/material";
// import Grid from "@mui/material/Grid2";
// import ImageGallary from "../../../common/ImageGallary";
// import InforCard from "../../../common/cards/InforCard";
// import { PageSection } from "../../../../modals/PageSection";

// type Props = {
//   category?: string;
//   title: string;
//   subTitle?: string;
//   content: string;
//   buttonText?: string;
//   time?: Date;
//   image: string | string[];
// };
// const InforCardImg = ({
//   title,
//   category,
//   subtitle: subTitle,
//   description,
//   images,
// }: PageSection) => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         display: "flex",
//         alignItems: "center",
//         flexDirection: "column",
//         padding: "20px",
//         backgroundColor: "#f0f4f8",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <Grid 
//       container 
//       spacing={2}
//       sx={{ flexDirection: { xs: "column", sm: "row" } }}>
//         <Grid size={{ xs: 12, sm: 6 }}>
//           <InforCard
//             category={category}
//             title={title}
//             subtitle={subTitle}
//             description={description}
//             buttonText="Learn More"
//           />
//         </Grid>
//         <Grid
//           size={{ xs: 12, sm: 6 }}
//           sx={{
//             maxWidth: 500,
//             height: 350,
//             transform: "translateZ(0)",
//           }}
//         >
//           {Array.isArray(images) ? (
//             <ImageGallary
//               itemData={
//                 Array.isArray(images)
//                   ? images
//                       .filter((img): img is string => typeof img === "string") // Ensure img is a string
//                       .map((img) => ({ img })) // Map to the required format
//                   : typeof images === "string"
//                   ? [{ img: images }] // If image is a single string, wrap it in an array
//                   : [] // In case image is neither a string nor an array of strings
//               }
//               showAllAsFeatured={true}
//             />
//           ) : (
//             // Otherwise, render a single image
//             <img
//               src={images}
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//               alt=""
//             />
//           )}
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default InforCardImg;
