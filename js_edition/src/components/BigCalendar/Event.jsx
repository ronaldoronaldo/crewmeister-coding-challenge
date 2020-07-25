import React from "react";

import { SicknessEvent, VacationEvent } from "./Event.style.jsx";

export default function Event({ event }) {
  const Wrapper = event.type === "sickness" ? SicknessEvent : VacationEvent;
  return (
    <Wrapper>
      <strong> {` ${event.title} - ${event.type} `}</strong>
    </Wrapper>
  );
}
