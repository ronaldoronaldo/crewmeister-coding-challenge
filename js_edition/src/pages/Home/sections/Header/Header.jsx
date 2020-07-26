import React, {useState} from "react";
import useIcal from "../../../../hooks/useIcal";
import {ButtonsWrapper, NavButton, Logo, NavBar, Title, ButtonText} from "./Header.style";
import DateRangeIcon from '@material-ui/icons/DateRange';
import GetAppIcon from '@material-ui/icons/GetApp';
import logo from '../../../../assets/images/logo.png'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import AnimatedModal from "../../../../components/AnimatedModal";

export default function ({ events }) {
  const { downloadIcal } = useIcal();
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);

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
          <GetAppIcon/>
        </NavButton>
        <NavButton
          onClick={() => setDatePickerIsOpen(!datePickerIsOpen)}>
          <ButtonText>
            Change date range
          </ButtonText>
          <DateRangeIcon/>
        </NavButton>
      </ButtonsWrapper>

      <AnimatedModal isOpen={datePickerIsOpen}/>

    </NavBar>
  );
}
