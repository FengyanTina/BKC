import { Box } from "@mui/material";
import ContactSection from "../../components/contact-section/ContactSection";


import Map from "../../components/map/Map";
import Intro from "../../components/contact-section/Intro";


export default function SchedulesMainPage() {
    return (
        <>
        <p>this is Schedules</p>
        <Box className="App">
      
        <Intro />
      <ContactSection />
      <Map />
      
    </Box>
        </>
    )}