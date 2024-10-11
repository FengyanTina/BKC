import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import DavidB from "../../../assets/DavidB.jpg";
import Leader from "../../../assets/leader.jpg";

export default function IntroCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="240" image={Leader} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Carter & Teresa Conlon
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Carter Conlon is General Overseer of Times Square Church, Inc. He
            joined the pastoral staff as associate pastor in 1994 and 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
