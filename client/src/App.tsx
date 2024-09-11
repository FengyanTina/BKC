import './App.css'
import DrawerAppBar from './components/appBar/DrawerAppBar'
import Varhistoria from './assets/Varhistoria.jpg'
import { Outlet } from "react-router";
import { Box, Link, Typography } from '@mui/material';
import RollingSection from './components/common/RollingSection';

export default function App() {
  
    return (
    <Box
    display={"flex"}
    flexDirection={"column"}
    justifyContent={"space-between"}
    minHeight={"100%"}
    
  >
    
    <div className='container' style={{ backgroundImage: `url(${Varhistoria})`,backgroundSize: 'cover' }}>
       <DrawerAppBar/>
      <div className='card'>
        <div className='contentbef'>
        </div>
        <div className='content1'>
       
          <h3>Card One</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p>
          <a href='/'>Read More</a>
        </div>
      </div>
      <div>
      <RollingSection/>
      </div>
      <div className='card'>
        <div className='content'>
          <h3>Card Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit..adipiscing elit..</p>
          <a href='/'>Read More</a>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
          <h3>Card Three</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Typography>
          <Link href='/'>Read More</Link>
        </Box>
      </Box>
      <Box className='card'>
        <Box className='content'>
          <Typography variant="h2">02</Typography>
          <Typography variant="h3">Card Two</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Typography>
          <Link href='/'>Read More</Link>
        </Box>
      </Box>
      <Box className='card'>
        <Box className='content'>
          <Typography variant="h2">03</Typography>
          <Typography variant="h3">Card Three</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Typography>
          <Link href='/'>Read More</Link>
        </Box>
      </Box>
    <Box
      component="main"
     
    >
      <Outlet />
    </Box>
    <div className='container' style={{ backgroundImage: `url(${Varhistoria})`,backgroundSize: 'cover' }}>
       <DrawerAppBar></DrawerAppBar>
      <div className='card'>
        <div className='contentbef'>
        </div>
        <div className='content1'>
        
          <h3>Card One</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p> */}
          <a href='/'>Read More</a>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
       
          <h3>Card Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p>
          <a href='/'>Read More</a>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
       
          <h3>Card Three</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p>
          <a href='/'>Read More</a>
        </div>
      
      </div>
    </div>
    </Box>
  );
}
