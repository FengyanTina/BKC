import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { Typography, Paper, Box } from "@mui/material";

interface Event {
  eventName: string;
  description: string;
  date: string; // ISO format string
}

const scheduledEvents: Event[] = [
  {
    eventName: "Sunday Service",
    description: "Weekly gathering for worship.",
    date: "2023-10-01T10:00:00",
  },
  {
    eventName: "Sunday School",
    description: "Classes for different age groups.",
    date: "2023-10-01T11:00:00",
  },
  {
    eventName: "Serving",
    description: "Fellowship and refreshments.",
    date: "2023-10-01T12:00:00",
  },
];

export default function BasicDateCalendar() {
  const [selectedDate, setSelectedDate] = React.useState<dayjs.Dayjs | null>(
    dayjs()
  );

  const getEventsForDate = (date: dayjs.Dayjs) => {
    const formattedDate = date.format("YYYY-MM-DD"); // Format date to compare
    return scheduledEvents.filter((event) =>
      event.date.startsWith(formattedDate)
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
      />
      {/* Show events for the selected date */}
      <Box mt={2}>
        <Typography variant="h6">Scheduled Events</Typography>
        {getEventsForDate(selectedDate!).length > 0 ? (
          getEventsForDate(selectedDate!).map((event, index) => (
            <Paper key={index} sx={{ padding: 2, margin: "8px 0" }}>
              <Typography variant="h6">{event.eventName}</Typography>
              <Typography>{event.description}</Typography>
            </Paper>
          ))
        ) : (
          <Typography>No events scheduled for this date.</Typography>
        )}
      </Box>
    </LocalizationProvider>
  );
}
