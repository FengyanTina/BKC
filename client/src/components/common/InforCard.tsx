import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface CardProps {
  title: string;
  subtitle: string;
  content: string;
  buttonText: string;
}
export default function InforCard({
  title,
  subtitle,
  content,
  buttonText,
}: CardProps) {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <Card
      sx={{
        minWidth: 275,
        height: "250",
        border: "none", // Remove the card border
        backgroundColor: "transparent", // Remove the card background color
        boxShadow: "none", // Remove the card shadow
      }}
    >
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {content}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {subtitle}
        </Typography>
        <Typography
          variant="body2"
        >
          {content}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          margin: 0,
        }}
      >
        <Button size="small">{buttonText}</Button>
      </CardActions>
    </Card>
  );
}
