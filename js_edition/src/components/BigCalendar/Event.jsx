import React from "react";
import { EventStyle } from "./Event.style.jsx";
import useRedirect from "../../hooks/useRedirect";

export default function Event({ event }) {
  const { redirect } = useRedirect();

  const showUserData = () => {
    redirect(`?userId=${event.userId}`)
  }

  return (
    <EventStyle
      isSickness={event.type === "sickness"}
      onClick={showUserData}>
      {` ${event.title} - ${event.type} `}
    </EventStyle>
  );
}
