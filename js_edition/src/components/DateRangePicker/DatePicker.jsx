import React, {useRef, useState} from "react";
import {DateRangePicker} from "react-date-range";
import {ApplyButton, DatePickerFooter} from "./DatePicker.style";

export default function DatePicker({handleRangeChange}) {
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
        <ApplyButton onClick={() => handleRangeChange(dateRange)}>Apply</ApplyButton>
      </DatePickerFooter>
    </>
  );
}
