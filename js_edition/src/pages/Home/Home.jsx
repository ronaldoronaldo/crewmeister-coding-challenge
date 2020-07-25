import React from "react";

import useMembersAbsences from "../../hooks/useMembersAbsences";

import Header from "./sections/Header"
import MainCalendar from "./sections/MainCalendar"
import * as Style from "./Home.style";

export default function Home() {
  const { membersAbsences } = useMembersAbsences(null, null, null);

  return (
    <Style.MainWrapper>
      <Header />
      <MainCalendar events={membersAbsences}/>
    </Style.MainWrapper>
  );
}
