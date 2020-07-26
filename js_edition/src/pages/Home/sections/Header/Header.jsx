import React from "react";
import useIcal from "../../../../hooks/useIcal";
import {ButtonsWrapper, IcalDownload, Logo, NavBar, Title} from "./Header.style";

export default function ({ events }) {
  const { downloadIcal } = useIcal();
  return (
    <NavBar>
      <Logo/>
      <Title>Absence Manager</Title>
      <ButtonsWrapper>
        <IcalDownload onClick={() => downloadIcal(events)}> Download Ical </IcalDownload>
      </ButtonsWrapper>
    </NavBar>
  );
}
