import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import 'dayjs/locale/sv'; 
import dayjs from 'dayjs';
dayjs.locale('sv');

export default function BasicDateTimePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="sv">
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="Basic date time picker" />
      </DemoContainer>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
        <DateTimePicker
          label="With Time Clock"
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
