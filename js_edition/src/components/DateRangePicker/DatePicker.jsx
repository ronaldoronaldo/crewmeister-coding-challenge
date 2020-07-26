import React, {useRef, useState} from "react";
import {DateRangePicker} from "react-date-range";
import {DatePickerButton, DatePickerFooter} from "./DatePicker.style";

export default function DatePicker({handleRangeChange, resetDateRange}) {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(2017, 0, 1),
    endDate: new Date(2017, 0, 1),
    key: 'selection',
  });

  const handleSelect = (ranges) => {
    setDateRange(ranges.selection);
  };

  return (
    <>
      <DateRangePicker
        ranges={[dateRange]}
        onChange={handleSelect}
      />
      <DatePickerFooter>
        <DatePickerButton onClick={resetDateRange}>Reset</DatePickerButton>
        <DatePickerButton onClick={() => handleRangeChange(dateRange)}>Apply</DatePickerButton>
      </DatePickerFooter>
    </>
  );
}
