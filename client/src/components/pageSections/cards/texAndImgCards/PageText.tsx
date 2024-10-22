import { Box, CardContent, Typography } from "@mui/material";
import { PageInforModel } from "../../../../models/PageInforModel";
import { formatDate, formatTime } from "../../../../utils/FormatDateAndTime";

const PageTextPart = ({
    title,
    subtitle,
    description,
    linkSubtitle,
    startTime,
    endTime,
    location
  }: PageInforModel
 
) => (
  <>
    <Typography
      variant="h3"
      sx={{
        textAlign: "center", 
        mx: "auto", 
        px: 3, // Add padding on the sides

        fontSize: {
          lg: "40px",
          md: "30px",
          sm: "30px",
          xs: "28px", // Adjust font size on smaller screens
        },
      }}
    >
      {title}
    </Typography>
    {linkSubtitle && (
      <Typography
        variant="h4"
        sx={{
          textAlign: "center", // Align the text to the center
          mx: "auto", // Horizontal margin to center it within the container
          px: 3, // Add padding on the sides
          mt: 2,
          marginBottom: "10px", // Add margin to separate from description
          fontSize: {
            lg: "30px",
            md: "22px",
            sm: "22px",
            xs: "20px", // Adjust font size for small screens
          },
        }}
      >
        <a
          href=""
          style={{
            fontSize: "inherit", // Inherit the font size from Typography
          }}
        >
          {linkSubtitle}
        </a>
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
          marginBottom: "10px",
          fontSize: {
            lg: "30px",
            md: "22px",
            sm: "22px",
            xs: "20px", // Adjust font size for smaller screens
          },
        }}
      >
        {subtitle}
      </Typography>
    )}

    <Box
      sx={{
        display: "flex", // Make it a flex container
      
        alignItems: "center", // Center vertically
        justifyContent: "center", // Center horizontally
        marginbottom: "10px",
        minHeight: "200px", // Ensure the text grid is at least as tall as the image grid
        maxHeight: "300px", // Match the max height to prevent too much height difference
        overflowY: "auto", // Enable scrolling if the text overflows
        "@media (max-width: 900px)": {
          minHeight: "200px", // Adjust height for smaller screens
          maxHeight: "300px",
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "left", // Align text to the left
          fontSize: {
            lg: "25px",
            md: "20px",
            sm: "20px",
            xs: "18px", // Adjust font size for smaller screens
          },
          lineHeight: 1.5,
          px: 3, // Padding for left and right space
          overflowY: "auto", // Enable scroll if text is too long
        }}
      >
        {description}
      </Typography>
    </Box>
    <CardContent>
    {startTime && (// Conditionally render time
          <Typography 
          variant="h5" 
          sx={{ mt: 2, color: "text.secondary" }}>
         <strong>Time: </strong> {formatDate(startTime)}: {formatTime(startTime)} 
           {endTime && ` - ${formatTime(endTime)}`} {/* Only render endTime if it exists */}
          </Typography>
        )}
         {location && (// Conditionally render time
          <Typography 
          variant="h5" 
          sx={{ mt: 2, color: "text.secondary" }}>
           <strong>Location:</strong> {location}
          </Typography>
        )}
    </CardContent>
  </>
);
export default PageTextPart;