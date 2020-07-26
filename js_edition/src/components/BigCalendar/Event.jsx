import React from "react";
import { EventStyle } from "./Event.style.jsx";
import useRouter from "../../hooks/useRouter";

export default function Event({ event }) {
  const { redirect } = useRouter();

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
