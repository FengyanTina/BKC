import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Modal,
  Typography,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { sv } from 'date-fns/locale';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
interface Job {
  name: string;
  members: string[];
  totalNumberNeeded: number;
}

interface Category {
  name: string;
  startTime: string;
  endTime: string;
  jobs: Job[];
}

interface Event {
  eventName: string;
  description: string;
  detail: string;
}

interface ServiceSchedule {
  startTime: string;
  endTime: string;
  event: Event;
  team: string;
  scheduleStatus: "open" | "closed";
  category: Category[];
}
interface CustomEvent {
    id: string;
    title: string;
    start: string;
    end: string;
    description?: string;
    team?: string;
  }
// const EventSchedule = () => {
//   const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
//   const [schedules, setSchedules] = useState<ServiceSchedule[]>([]);
//   const [open, setOpen] = useState(false);
//   const [newSchedule, setNewSchedule] = useState<ServiceSchedule>({
//     startTime: dayjs().toISOString(),
//     endTime: dayjs().add(2, "hour").toISOString(),
//     event: { eventName: "", description: "", detail: "" },
//     team: "",
//     scheduleStatus: "open",
//     category: [],
//   });

//   // Function to handle opening the modal
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   // Function to add the new schedule
//   const handleAddSchedule = () => {
//     setSchedules([...schedules, newSchedule]);
//     handleClose();
//   };

//   // Filter schedules by the selected date
//   const getEventsForDate = (date: Dayjs) => {
//     return schedules.filter(
//       (schedule) =>
//         dayjs(schedule.startTime).format("YYYY-MM-DD") ===
//         date.format("YYYY-MM-DD")
//     );
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <Typography variant="h4" gutterBottom>
//        DatePicker Schedule Events
//       </Typography>

//       {/* Date Picker */}
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker
//           label="Select Date"
//           value={selectedDate}
//           onChange={(date) => setSelectedDate(date)}
//         />
//       </LocalizationProvider>

//       {/* Button to Add Event */}
//       <Button variant="contained" color="primary" onClick={handleOpen}>
//         Add Event
//       </Button>

//       {/* Modal to Create New Event */}
//       <Modal open={open} onClose={handleClose}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 400,
//             bgcolor: "background.paper",
//             p: 4,
//             boxShadow: 24,
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             Add New Event
//           </Typography>
//           <TextField
//             label="Event Name"
//             fullWidth
//             value={newSchedule.event.eventName}
//             onChange={(e) =>
//               setNewSchedule({
//                 ...newSchedule,
//                 event: { ...newSchedule.event, eventName: e.target.value },
//               })
//             }
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             label="Description"
//             fullWidth
//             value={newSchedule.event.description}
//             onChange={(e) =>
//               setNewSchedule({
//                 ...newSchedule,
//                 event: { ...newSchedule.event, description: e.target.value },
//               })
//             }
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             label="Team"
//             fullWidth
//             value={newSchedule.team}
//             onChange={(e) =>
//               setNewSchedule({ ...newSchedule, team: e.target.value })
//             }
//             sx={{ mb: 2 }}
//           />
//           <Button variant="contained" onClick={handleAddSchedule}>
//             Save Event
//           </Button>
//         </Box>
//       </Modal>

//       {/* Displaying Events for Selected Date */}
//       <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
//         Events for {selectedDate?.format("YYYY-MM-DD")}
//       </Typography>

//       <Grid container spacing={2}>
//         {getEventsForDate(selectedDate || dayjs()).map((schedule, index) => (
//           <Grid size={{ xs: 12 }} key={index}>
//             <Paper elevation={3} sx={{ padding: 2 }}>
//               <Typography variant="h6">{schedule.event.eventName}</Typography>
//               <Typography>{schedule.event.description}</Typography>
//               <Typography>Team: {schedule.team}</Typography>
//               <Typography>
//                 Start: {dayjs(schedule.startTime).format("HH:mm")}
//               </Typography>
//               <Typography>
//                 End: {dayjs(schedule.endTime).format("HH:mm")}
//               </Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };
const EventSchedule = () => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
    const [schedules, setSchedules] = useState<CustomEvent[]>([]); // Store CustomEvent array
    const [open, setOpen] = useState(false);
    const [newSchedule, setNewSchedule] = useState<CustomEvent>({
      id: "",
      title: "",
      start: dayjs().toISOString(),
      end: dayjs().add(2, "hour").toISOString(),
      description: "",
      team: "",
    });
  
    // Function to handle opening and closing modal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    // Function to add a new schedule to both local state and FullCalendar
    const handleAddSchedule = () => {
      const newEvent: CustomEvent = {
        ...newSchedule,
        id: `${schedules.length + 1}`, // Give a simple unique ID
        start: selectedDate?.toISOString() || dayjs().toISOString(), // Use selected date
        end: selectedDate?.add(2, "hour").toISOString() || dayjs().add(2, "hour").toISOString(),
      };
  
      setSchedules([...schedules, newEvent]); // Add to the list of schedules
      handleClose(); // Close modal
    };
  
    return (
      <div style={{ padding: 20 }}>
        <Typography variant="h4" gutterBottom>
          DatePicker Schedule Events
        </Typography>
  
        {/* Date Picker */}
        <LocalizationProvider dateAdapter={ AdapterDayjs } >
          <DateTimePicker
            label="Select Date"
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </LocalizationProvider>
  
        {/* Button to Add Event */}
        <Button variant="contained" color="primary" onClick={handleOpen} sx={{ marginTop: 2 }}>
          Add Event
        </Button>
  
        {/* Modal to Create New Event */}
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              p: 4,
              boxShadow: 24,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Add New Event
            </Typography>
            <TextField
              label="Event Name"
              fullWidth
              value={newSchedule.title}
              onChange={(e) =>
                setNewSchedule({ ...newSchedule, title: e.target.value })
              }
              sx={{ mb: 2 }}
            />
            <TextField
              label="Description"
              fullWidth
              value={newSchedule.description}
              onChange={(e) =>
                setNewSchedule({ ...newSchedule, description: e.target.value })
              }
              sx={{ mb: 2 }}
            />
            <TextField
              label="Team"
              fullWidth
              value={newSchedule.team}
              onChange={(e) =>
                setNewSchedule({ ...newSchedule, team: e.target.value })
              }
              sx={{ mb: 2 }}
            />
            <Button variant="contained" onClick={handleAddSchedule}>
              Save Event
            </Button>
          </Box>
        </Modal>
  
        {/* FullCalendar Component */}
        <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
          Calendar View
        </Typography>
       
  
        {/* Displaying Events for Selected Date */}
        <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
          Events for {selectedDate?.format("YYYY-MM-DD")}
        </Typography>
  
        <Grid container spacing={2}>
          {schedules
            .filter(
              (schedule) =>
                dayjs(schedule.start).format("YYYY-MM-DD") ===
                selectedDate?.format("YYYY-MM-DD")
            )
            .map((schedule, index) => (
              <Grid size={{ xs: 12 }} key={index}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="h6">{schedule.title}</Typography>
                  <Typography>{schedule.description}</Typography>
                  <Typography>Team: {schedule.team}</Typography>
                  <Typography>
                    Start: {dayjs(schedule.start).format("HH:mm")}
                  </Typography>
                  <Typography>
                    End: {dayjs(schedule.end).format("HH:mm")}
                  </Typography>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </div>
    );
  };
  
export default EventSchedule;
