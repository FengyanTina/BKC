import { Box,  Typography } from "@mui/material";
import "./schedules.css";
import ServingScheduleCollapsibleTable from "../../components/scheduleManagement/ServingScheduleCollapsibleTable";
import EventsCalendar from "./EventsCalendar";
import Carousel from "../../components/common/Carousel";
import { comingEvents } from "../../data";

export default function SchedulesMainPage() {
  return (
    <>
      <Box
        sx={{
          marginTop: "150px",
          backgroundColor: "#f0f4f8",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "80%" }}>
          <Carousel events={comingEvents} />
        </Box>

        <Box sx={{ marginTop: "50px", marginBottom: "50px", width: "50%" }}>
         
          <EventsCalendar />
        </Box>

        <Box sx={{ marginTop: "50px", marginBottom: "50px", width: "90%" }}>
        <Typography sx={{  marginBottom: "50px", textAlign:'center'}} variant="h4">Comming Week Schedule</Typography>
          <ServingScheduleCollapsibleTable />
        </Box>
      </Box>
    </>
  );
}
