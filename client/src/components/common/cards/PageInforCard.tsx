
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { formatDate, formatTime } from "../../../utils/FormatDateAndTime";
import { PageInforModel } from "../../../models/PageInforModel";
export default function PageInforCard({
  category,
  title,
 subtitle,
 description,
  buttonText,
  startTime,
  endTime,
  location,
}: PageInforModel) {
//   const bull = (
//     <Box
//       component="span"
//       sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//     >
      
//     </Box>
//   );
 // const formattedTime = time ? formatDateTime(time) : null;
  return (
    <Card
      sx={{
        maxWidth: 500,
        height: 350,  
        border: "none", // Remove the card border
        backgroundColor: "transparent", // Remove the card background color
        boxShadow: "none", // Remove the card shadow
        overflow: "hidden", // Hide overflow if content is too long
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1, // Ensure the content grows and pushes the button down
          overflow: "hidden", // Handle overflow for long content
          paddingLeft:'0'
        }}
      >
        {category && ( // Conditionally render category
          <Typography
            gutterBottom
            sx={{
              color: "text.secondary",
              fontSize: 18,
              WebkitLineClamp: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
            }}
          >
            {category}
          </Typography>
        )}
       
        <Typography
          variant="h5"
          component="div"
          sx={{
            mb: 1,
            WebkitLineClamp: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Typography>
        {subtitle && ( // Conditionally render category
          <Typography
            gutterBottom
            sx={{
                color: "text.secondary",
                mb: 1.5,
                fontSize: 18,
                WebkitLineClamp: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
            }}
          >
            {subtitle}
          </Typography>
        )}
        
        <Typography
          variant="body2"
          sx={{
            width: "100%",
            WebkitLineClamp: 5,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            fontSize: 18,
          }}
        >
          {description}
        </Typography>
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
      <CardActions>
        <Button size="small">{buttonText}</Button>
      </CardActions>
    </Card>
  );
}
