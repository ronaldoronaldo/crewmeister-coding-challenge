import React from "react";
import useIcal from "../../../../hooks/useIcal";
import {ButtonsWrapper, NavButton, Logo, NavBar, Title, ButtonText} from "./Header.style";
import DateRangeIcon from '@material-ui/icons/DateRange';
import logo from '../../../../assets/images/logo.png'

export default function ({ events }) {
  const { downloadIcal } = useIcal();
  return (
    <NavBar>
      <Logo src={logo}/>
      <Title>Absence Manager</Title>
      <ButtonsWrapper>
        <NavButton
          onClick={() => downloadIcal(events)}>
          <ButtonText>
            Download Ical
          </ButtonText>
        </NavButton>
        <NavButton
          onClick={() => downloadIcal(events)}>
          <ButtonText>
            Change date range
          </ButtonText>
          <DateRangeIcon/>
        </NavButton>

      </ButtonsWrapper>
    </NavBar>
  );
}
