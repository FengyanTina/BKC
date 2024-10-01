import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
interface Step {
    title: string;
    description: string;
    link?: string; // Optional link if needed
  }
type Props = {
    category?: string;
    title: string;
    subTitle?: string;
    linkSubtitle?: string;
    content: string;
    buttonText?: string;
    time?: Date;
    image:string | string[];
    date?: Date;
    linkBody?: string;
    location?: string;
    steps?: Step[];
}
interface CardProps {
  category?: string;
  title: string;
  subTitle?: string;
   linkSubtitle?: string;
  content: string;
  buttonText?: string;
  date?: Date;
  time?: Date;
  linkBody?: string;
  location?: string;
  steps?: Step[];
}
export default function InforCard({
  category,
  title,
  subTitle: subtitle,
  content,
  buttonText,
  time,
}: CardProps) {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      
    </Box>
  );
  const formattedTime = time ? time.toLocaleString() : null;
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
        {formattedTime && (// Conditionally render time
          <Typography 
          variant="caption" 
          sx={{ mt: 2, color: "text.secondary" }}>
            {formattedTime}
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
        <Typography
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
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{buttonText}</Button>
      </CardActions>
    </Card>
  );
}
