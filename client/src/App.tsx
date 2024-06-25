import './App.css'
import DrawerAppBar from './components/DrawerAppBar'
import Varhistoria from './assets/Varhistoria.jpg'
import { Outlet } from "react-router";
import { Box, Link, Typography } from '@mui/material';

export default function App() {
  
    return (
    <Box
    display={"flex"}
    flexDirection={"column"}
    justifyContent={"space-between"}
    minHeight={"100%"}
    
  >
    <DrawerAppBar />
    <div className='container' style={{ backgroundImage: `url(${Varhistoria})`,backgroundSize: 'cover' }}>
       <DrawerAppBar></DrawerAppBar>
      <div className='card'>
        <div className='contentbef'>
        </div>
        <div className='content'>
        <h2>01</h2>
          <h3>Card One</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <a href='/'>Read More</a>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
        <h2>02</h2>
          <h3>Card Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <a href='/'>Read More</a>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
        <h2>03</h2>
          <h3>Card Three</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <a href='/'>Read More</a>
        </div>
      
      </div>
    </div> 
    <Box className='card'>
        <Box className='contentbef'></Box>
        <Box className='content'>
          <Typography variant="h2">01</Typography>
          <Typography variant="h3">Card One</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Link href='/'>Read More</Link>
        </Box>
      </Box>
      <Box className='card'>
        <Box className='content'>
          <Typography variant="h2">02</Typography>
          <Typography variant="h3">Card Two</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Link href='/'>Read More</Link>
        </Box>
      </Box>
      <Box className='card'>
        <Box className='content'>
          <Typography variant="h2">03</Typography>
          <Typography variant="h3">Card Three</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Link href='/'>Read More</Link>
        </Box>
      </Box>
    <Box
      component="main"
     
    >
      <Outlet />
    </Box>
    {/* <div className='container' style={{ backgroundImage: `url(${Varhistoria})`,backgroundSize: 'cover' }}>
       <DrawerAppBar></DrawerAppBar>
      <div className='card'>
        <div className='contentbef'>
        </div>
        <div className='content'>
        <h2>01</h2>
          <h3>Card One</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <a href='/'>Read More</a>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
        <h2>02</h2>
          <h3>Card Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <a href='/'>Read More</a>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
        <h2>03</h2>
          <h3>Card Three</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <a href='/'>Read More</a>
        </div>
      
      </div>
    </div> */}
    </Box>
  );
}
