import React from "react";
import useRouter from "../../../hooks/useRouter";
import {EventStyle, EventText, EventType} from "./Event.style";

export default function Event({ event }) {
  const { redirect } = useRouter();

  const showUserData = () => {
    redirect(`?userId=${event.userId}`)
  }

  return (
    <EventStyle
      isSickness={event.type === "sickness"}
      onClick={showUserData}>
      <EventText>{event.title}</EventText>
      <EventType> - {event.type}</EventType>
    </EventStyle>
  );
}
