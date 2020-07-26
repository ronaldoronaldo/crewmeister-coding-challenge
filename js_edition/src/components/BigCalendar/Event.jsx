import React from "react";
import { EventStyle } from "./Event.style.jsx";

export default function Event({ event }) {
  return (
    <EventStyle isSickness={event.type === "sickness"}>
      {` ${event.title} - ${event.type} `}
    </EventStyle>
  );
}
