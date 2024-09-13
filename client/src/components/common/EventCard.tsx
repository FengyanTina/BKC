import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface EventCardProps {
    title: string;
    image: string;
    description: string;
  }
export default function EventCard({  title, image, description }:EventCardProps) {
  return (
    <Card sx={{ maxWidth: 245,height: 250,display: 'flex', flexDirection: 'column' , }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <CardContent  sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '0.875rem' }}>
        {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',fontSize: '0.75rem', }}>
        {description}
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
