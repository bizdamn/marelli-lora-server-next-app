import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';
import moment from 'moment'

export default function DatePickerComponent({ startDate, SetStartDate, endDate, SetEndDate }) {

  const [pickerValue, setPickerValue] = useState(moment(startDate, "YYYY-MM-DD").add(0, 'days').format("YYYY-MM-DDTHH:mm:ss"))
  function setValue(value) {
    setPickerValue(moment(value, "YYYY-MM-DD").format("YYYY-MM-DD"))
    SetStartDate(moment(value, "YYYY-MM-DD").add(0, 'days').format("YYYY-MM-DD"))
    SetEndDate(moment(value, "YYYY-MM-DD").add(1, 'days').format("YYYY-MM-DD"))
  }


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box m={2}>
        <DatePicker
          label="Choose a date"
          views={["year", "month", "day"]}
          format="DD-MM-YYYY"
          maxDate = {new Date()}
          value={pickerValue}
          onChange={(newValue) => {
            setValue(moment(newValue).format("YYYY-MM-DDTHH:mm:ss"))
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
    </LocalizationProvider>
  );
}
