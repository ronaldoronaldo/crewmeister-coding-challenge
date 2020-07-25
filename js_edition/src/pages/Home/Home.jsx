import React from "react";

import useMembersAbsences from "../../hooks/useMembersAbsences";
import useQueryString from "../../hooks/useQueryString";

import Header from "./sections/Header";
import MainCalendar from "./sections/MainCalendar";
import * as Style from "./Home.style";

export default function Home() {
  let queryString = useQueryString();

  const { membersAbsences } = useMembersAbsences(
    queryString.get("startDate"),
    queryString.get("endDate"),
    queryString.get("userId"),
  );

  return (
    <Style.MainWrapper>
      <Header events={membersAbsences} />
      <MainCalendar events={membersAbsences} />
    </Style.MainWrapper>
  );
}
