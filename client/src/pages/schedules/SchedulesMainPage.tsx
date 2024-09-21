import { Box } from "@mui/material";
import "./schedules.css";

import BasicDateTimePicker from "../../components/common/DateTimePicker";
import ServingScheduleCollapsibleTable from "../../components/scheduleManagement/ServingScheduleCollapsibleTable";

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
        <Box sx={{ marginTop: "100px", padding: "100px", width: "60%" }}>
          <BasicDateTimePicker />
        </Box>
        <Box sx={{ marginTop: "50px", marginBottom: "50px",width: "90%" }}>
          <ServingScheduleCollapsibleTable />
        </Box>
      </Box>
    </>
  );
}
