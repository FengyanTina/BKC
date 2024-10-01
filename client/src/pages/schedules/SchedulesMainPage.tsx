import { Box, Typography } from "@mui/material";
import EventsCalendar from "./EventsCalendar";
import Carousel from "../../components/common/slides/Carousel";
import { comingEvents } from "../../data";
import CollapsibleTable from "../../components/pageSections/scheduleManagement/ServingScheduleCollapsibleTable";
import EventSchedule from "../../components/pageSections/scheduleManagement/DatePickerEventSchedule";
import Calendar from "../../components/pageSections/scheduleManagement/Calendar";

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
          <Typography
            sx={{ marginBottom: "50px", textAlign: "center" }}
            variant="h4"
          >
            Comming Week Schedule
          </Typography>
          {/* <ServingScheduleCollapsibleTable /> */}
          <CollapsibleTable />
        </Box>
        <EventSchedule />
        <Calendar />
      </Box>
    </>
  );
}
