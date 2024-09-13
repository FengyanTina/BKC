import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { SocialIcon } from 'react-social-icons'

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
      <Box>
      <SocialIcon network="pinterest"  style={{ height: 25, width: 25 }} />
      <SocialIcon  url="https://instagram.com" network="instagram" style={{ height: 25, width: 25 }} />
      
      <SocialIcon url="https://facebook.com" network="facebook" style={{ height: 25, width: 25 }} />
      </Box>
    </Box>
  );
};

export default Footer;
