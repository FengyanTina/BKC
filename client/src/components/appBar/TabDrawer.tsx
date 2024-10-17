import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography } from '@mui/material';
import HuvudloggaBKC3 from '../../assets/Huvudlogga-BKC3.png'; 
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import LoginIcon from '@mui/icons-material/Login';
import InfoIcon from '@mui/icons-material/Info';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useNavigate } from 'react-router-dom';
interface TabDrawerProps {
    open: boolean;
    onClose: () => void;
  }
  const navRoutes = [
    { label: 'Home', path: '/home' },
    { label: 'About Us', path: '/aboutUs' },
    { label: 'Schedules', path: '/schedules' },
    { label: 'Services', path: '/services' },
    { label: 'Activities', path: '/activities' },
    { label: 'Contact', path: '/contact' },
  ];
  
export default function TabDrawer({ open, onClose }: TabDrawerProps) {
    type NavItem = typeof navItems[number];
    const navigate = useNavigate();
// Map icons to each nav item with proper typing
const icons: Record<NavItem, JSX.Element> = {
  Home: <HomeIcon />,
  'About Us': <InfoIcon />,
  Schedules: <EventAvailableIcon />,
  Services: <GroupsIcon />,
  Activities: <LocalActivityIcon />,
  Contact: <MailIcon/>
};
const navItems = ['Home','About Us','Schedule', 'Services', 'Activities'];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
           <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, color: 'black' }} 
        >
          <img src={HuvudloggaBKC3} alt="Logo" style={{ maxHeight: 50, marginRight: 10 }} />
        </Typography>
      </Box>
      <Divider />
      <List>
      {navRoutes.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton onClick={() => navigate(item.path)}> {/* Handle navigation on click */}
            <ListItemIcon>
              {/* Safely render the correct icon */}
              {icons[item.label]} {/* icons[item.label] based on the icons you defined */}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
      <Divider />
      <List>
        {['Login'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <LoginIcon/>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer  open={open} onClose={onClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
