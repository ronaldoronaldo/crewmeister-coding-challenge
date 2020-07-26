import React from "react";
import useIcal from "../../../../hooks/useIcal";
import {ButtonsWrapper, IcalDownloadButton, Logo, NavBar, Title} from "./Header.style";
import DateRangeIcon from '@material-ui/icons/DateRange';
import logo from '../../../../assets/images/logo.png'

export default function ({ events }) {
  const { downloadIcal } = useIcal();
  return (
    <NavBar>
      <Logo src={logo}/>
      <Title>Absence Manager</Title>
      <ButtonsWrapper>
        <IcalDownloadButton onClick={() => downloadIcal(events)}> Download Ical </IcalDownloadButton>
        <DateRangeIcon/>
      </ButtonsWrapper>
    </NavBar>
  );
}
