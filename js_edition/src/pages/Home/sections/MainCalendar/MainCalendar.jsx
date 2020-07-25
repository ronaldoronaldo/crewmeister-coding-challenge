import React from "react";
import BigCalendar from "../../../../components/BigCalendar/BigCalendar";

import { MainCalendarWrapper } from "./MainCalendar.style";

export default function MainCalendar({ events }) {
  return (
    <MainCalendarWrapper>
      <BigCalendar events={events} />
    </MainCalendarWrapper>
  );
}
