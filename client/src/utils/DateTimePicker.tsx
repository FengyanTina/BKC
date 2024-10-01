import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import "dayjs/locale/sv";
import dayjs, { Dayjs } from "dayjs";
dayjs.locale("sv");

export default function BasicDateTimePicker() {
  // State to manage selected date and time
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());

  // Function to handle date change
  const handleDateChange = (newDate: Dayjs | null) => {
    setSelectedDate(newDate);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="sv">
      {/* <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="Basic date time picker" />
      </DemoContainer> */}
      <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
        <DateTimePicker
          label="Select Date and Time"
          value={selectedDate}
          onChange={handleDateChange} // Updates state with selected date and time
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
