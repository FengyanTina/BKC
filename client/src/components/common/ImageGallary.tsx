import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DetailsIcon from '@mui/icons-material/Details';
import Conference from "../../assets/Conference.jpg";
import Mission from "../../assets/Mission.png";
import Prayer from "../../assets/Prayer.jpg";
import Worship from "../../assets/Worship.jpeg";
import Bible from "../../assets/Bible.jpg";
import BethelWorship from "../../assets/BethelWorship.jpg";
import worshipHands from "../../assets/worshipHands.jpg";

import PrayerBible from "../../assets/spiritual-prayer-hands-holding-bible.jpg";

const itemData = [
    {
      img: Bible,
      title: 'Breakfast',
      author: '@bkristastucchio',
      featured: true,
    },
    {
      img: Worship,
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: Prayer,
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: Conference,
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: Mission,
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: BethelWorship,
      title: 'Honey',
      author: '@arwinneil',
      featured: true,
    },
    {
      img:worshipHands,
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: PrayerBible ,
      title: 'Fern',
      author: '@katie_wasserman',
    },
    
   
  ];
function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageGallary() {
  return (
    <ImageList
      sx={{
        maxWidth: 400,
        height: 450,
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <DetailsIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

