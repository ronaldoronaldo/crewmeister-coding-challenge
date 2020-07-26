import React, {useState} from "react";
import {Background, Modal} from "./AnimatedModal.style";
import {DateRangePicker} from "react-date-range";

export default function AnimatedModal({ events }) {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })

  const handleSelect = (ranges) => {
    console.log(ranges);
    setDateRange(ranges.selection);
  }

  return (
    <Background>
      <Modal>
        <DateRangePicker
          ranges={[dateRange]}
          onChange={handleSelect}
        />
      </Modal>
    </Background>
  );
}
