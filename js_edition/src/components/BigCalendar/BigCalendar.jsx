import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import CalendarStyle from "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import Event from "./Event";
import * as Style from "./BigCalendar.style";

const allViews = Object.keys(Views).map((k) => Views[k]);

export default function BigCalendar({ events }) {
  const localizer = momentLocalizer(moment);
  return (
    <Style.CalendarWrapper>
      <Calendar
        localizer={localizer}
        events={events}
        views={allViews}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date(2017, 0, 1)}
        style={{ height: 500 }}
        components={{
          eventWrapper: Event,
        }}
      />
    </Style.CalendarWrapper>
  );
}
