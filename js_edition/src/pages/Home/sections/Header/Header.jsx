import React, {useState} from "react";
import useIcal from "../../../../hooks/useIcal";
import {ButtonsWrapper, Logo, NavBar, Title} from "./Header.style";
import DateRangeIcon from '@material-ui/icons/DateRange';
import GetAppIcon from '@material-ui/icons/GetApp';
import logo from '../../../../assets/images/logo.png'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import AnimatedModal from "../../../../components/AnimatedModal";
import NavButton from "../../../../components/NavButton/NavButton";

export default function ({ events }) {
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);
  const { downloadIcal } = useIcal();
  const exportIcal = () => downloadIcal(events);

    return (
    <NavBar>
      <Logo src={logo}/>
      <Title>Absence Manager</Title>
      <ButtonsWrapper>
        <NavButton
          onClick={exportIcal}
          text={'Export Ical'}
          Icon={GetAppIcon}
        />
        <NavButton
          onClick={() => setDatePickerIsOpen(true)}
          text={'Change date range'}
          Icon={DateRangeIcon}
        />
      </ButtonsWrapper>
      <AnimatedModal
        closeModal={() => setDatePickerIsOpen(false)}
        isOpen={datePickerIsOpen}/>
    </NavBar>
  );
}
