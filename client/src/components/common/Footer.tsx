import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer: React.FC = () => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        backgroundColor: 'transparent', // Dark background color
        color: 'black', // White text color
        padding: '20px',
        textAlign: 'center',
     
        bottom: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)' // Optional shadow
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
      <Box>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Terms of Service
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Contact Us
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
