import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import formatDateTime from '../../utils/FormatDateTime';

interface EventCardProps {
    time:Date;
    title: string;
    image: string;
    description: string;
    details?:string;
  }


export default function EventCard({  time,title, image, description,details }:EventCardProps) {
  return (
    <Card sx={{ width:'100%',
       display: 'flex', flexDirection: 'column',justifyContent:'center'}}>
      <CardMedia
        sx={{ 
            height: 0,                    // Ensures no height is taken by the card media itself
            paddingTop: '40%',          // This creates a 16:9 aspect ratio box
            width: '100%',                 // Ensures the width is 100% of the parent
            objectFit: 'cover',
            }}
        image={image}
        title={title}
      />
      <CardContent  sx={{ flexGrow: 1, }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '0.875rem' }}>
        {title}
        </Typography>
        <Typography variant="body2" sx={{ 
            color: 'text.secondary',
            fontSize: '0.75rem',
            width: "100%",   
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical", 
            flexShrink: 0
            }}>
        {description}
        </Typography>
        <Typography 
        sx={{ 
            color: "text.secondary",
            fontSize: '0.80rem',
            marginTop: '10px',   // Pushes the time towards the bottom of the container
            }}>
        {formatDateTime(time)}
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}


