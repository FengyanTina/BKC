import { Box, colors } from "@mui/material";
import "./schedules.css";

import BasicDateTimePicker from "../../components/common/DateTimePicker";
import ServingScheduleCollapsibleTable from "../../components/scheduleManagement/ServingScheduleCollapsibleTable";
import EventSchedule from "../../components/scheduleManagement/EventSchedule";
import BasicDateCalendar from "../../components/scheduleManagement/Calendar";
import MuiCalendar from "../../components/scheduleManagement/MuiCalendar";
import EventScheduleCalendar from "./EventScheduleCalendar";
import EventsCalendar from "./EventsCalendar";

const text =
  "en plats för mötet mellan Gud och människa, en plats där tillber Gud en plats där du kan lära känna och utvecklas i den plan Gudhar för dig så att du blir hans lärjunge en plats där sår läks, hoppspirar och där barn och unga kan se med tillförsikt på framtidenhar för dig så att du blir hans lärjunge en plats där sår läks, hopp spirar och där barn och unga kan se med tillförsikt på framtiden har för dig så att du blir hans lärjunge en plats där sår läks, hoppspirar och där barn och unga kan se med tillförsikt på framtidenhar för dig så att du blir hans lärjunge en plats där sår läks, hoppspirar och där barn och unga kan se med tillförsikt på framtidenhar för dig så att du blir hans lärjunge en plats där sår läks, hoppspirar och där barn och unga kan se med tillförsikt på framtiden";
export default function SchedulesMainPage() {
  return (
    <>
      <Box
        sx={{
          marginTop: "30px",
          backgroundColor: "#f0f4f8",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
             <Box sx={{ marginTop: "50px", marginBottom: "50px", width: "50%" }}>
          <EventsCalendar />
        </Box>
        {/* <h4 style={{ color: "red" }}>
          *******There will be schedules on the Calendar********
        </h4>
        <Box sx={{ marginTop: "10px", padding: "10px" }}>
         
          <BasicDateTimePicker />
          <h4 style={{ color: "red" }}>
            *******There will be input function to schedule event with this
            timePicker********
          </h4>
        </Box> */}

  
        <Box sx={{ marginTop: "50px", marginBottom: "50px", width: "90%" }}>
          <ServingScheduleCollapsibleTable />
        </Box>
      </Box>
    </>
  );
}
