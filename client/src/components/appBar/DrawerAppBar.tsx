// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import HuvudloggaBKC3 from "../../assets/Huvudlogga-BKC3.png";
// import ScheduleMenuItems from "./ScheduleMenuItems";
// import ServiceMenuItems from "./ServiceMenuItems";
// import ActivitiesMenuItems from "./ActivitiesMenuItems";
// import TabDrawer from "./TabDrawer";

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

// const drawerWidth = 240;
// // const navItems = ['Schedule', 'Services', 'Activities'];

// export default function DrawerAppBar(props: Props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         BKC
//       </Typography>
//       <Divider />
//       <List>
//         <ScheduleMenuItems />
//         <ServiceMenuItems />
//         <ActivitiesMenuItems />
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <div>
//         <AppBar
//           component="nav"
//           sx={{
//             backgroundColor: "transparent", // Make the background transparent
//             boxShadow: "none",
//           }}
//         >
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2, display: { sm: "none" } }}
//             >
//               <MenuIcon />
//             </IconButton>

//             <Typography
//               variant="h6"
//               component="div"
//               sx={{
//                 flexGrow: 1,
//                 display: { xs: "none", sm: "block" },
//                 color: "black",
//               }}
//             >
//               <img
//                 src={HuvudloggaBKC3}
//                 alt="Logo"
//                 style={{ maxHeight: 50, marginRight: 10 }}
//               />
//             </Typography>
//             <Box
//               sx={{
//                 display: { xs: "none", sm: "flex" },
//                 gap: "50px",
//                 justifyContent: "center", // Center the MenuItems
//                 flexGrow: 1, // Allow the Box to grow to occupy space and center its content
//                 "&:focus": { outline: "none" },
//               }}
//             >
//               <ScheduleMenuItems />
//               <ServiceMenuItems />
//               <ActivitiesMenuItems />
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <TabDrawer open={drawerOpen} onClose={handleDrawerToggle} />
//       </div>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//         <Typography></Typography>
//       </Box>
//     </Box>
//   );
// }
