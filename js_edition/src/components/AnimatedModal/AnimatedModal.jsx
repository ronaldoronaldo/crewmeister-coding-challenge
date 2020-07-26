import React, {useRef, useState} from "react";
import {Background, Container, Modal} from "./AnimatedModal.style";
import {DateRangePicker} from "react-date-range";
import useClickOutside from "../../hooks/useClickOutside";

export default function AnimatedModal({isOpen, closeModal}) {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(2017, 0, 1),
    endDate: new Date(2017, 0, 1),
    key: 'selection',
  });
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, closeModal);

  const handleSelect = (ranges) => {
    console.log(ranges);
    setDateRange(ranges.selection);
  };

  return (
    <Container isOpen={isOpen}>
      <Background isOpen={isOpen}>
        <Modal ref={wrapperRef} isOpen={isOpen}>
          <DateRangePicker
            ranges={[dateRange]}
            onChange={handleSelect}
          />
        </Modal>
      </Background>
    </Container>
  );
}
