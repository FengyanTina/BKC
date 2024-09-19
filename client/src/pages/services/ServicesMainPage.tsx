import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import BasicDateTimePicker from "../../components/common/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function ServicesMainPage() {
    return (
        <>
        <p>this is Services</p>
        <BasicDateTimePicker/>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
        </>
    )}