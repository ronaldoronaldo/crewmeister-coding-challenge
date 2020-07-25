import React from "react";

import useMembersAbsences from "../../hooks/useMembersAbsences";

import * as Style from "./Home.style";

export default function Home() {
  const { membersAbsences } = useMembersAbsences(null, null, null);

  console.log(membersAbsences);

  return <Style.MainWrapper>Home</Style.MainWrapper>;
}
