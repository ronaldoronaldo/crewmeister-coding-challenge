import React, {useRef, useState} from "react";
import useIcal from "../../../../hooks/useIcal";
import useClickOutside from "../../../../hooks/useClickOutside";
import {ButtonsWrapper, Logo, NavBar, Title} from "./Header.style";
import DateRangeIcon from '@material-ui/icons/DateRange';
import GetAppIcon from '@material-ui/icons/GetApp';
import logo from '../../../../assets/images/logo.png'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import AnimatedModal from "../../../../components/AnimatedModal";
import NavButton from "../../../../components/NavButton/NavButton";

export default function ({ events }) {
  const { downloadIcal } = useIcal();
  const wrapperRef = useRef(null);
  const closeModal = () => setDatePickerIsOpen(!datePickerIsOpen);
  const exportIcal = () => downloadIcal(events);
  useClickOutside(closeModal);
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);

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
          onClick={closeModal}
          text={'Change date range'}
          Icon={DateRangeIcon}
        />
      </ButtonsWrapper>
      <AnimatedModal isOpen={datePickerIsOpen}/>
    </NavBar>
  );
}
