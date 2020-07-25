import React from "react";

import useMembersAbsences from "../../hooks/useMembersAbsences";

import * as Style from "./Home.style";
import BigCalendar from "../../components/BigCalendar/BigCalendar";

export default function Home() {
  const { membersAbsences } = useMembersAbsences(null, null, null);

  console.log(membersAbsences);

  return <Style.MainWrapper><BigCalendar events={membersAbsences} /></Style.MainWrapper>;
}
