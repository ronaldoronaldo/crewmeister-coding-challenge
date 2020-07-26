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
import DatePicker from "../../../../components/DateRangePicker/DatePicker";
import useRouter from "../../../../hooks/useRouter";

export default function ({ events }) {
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);
  const { downloadIcal } = useIcal();
  const { redirect } = useRouter();

  const handleDateRangeChange = range => {

  }

  return (
    <NavBar>
      <Logo src={logo}/>
      <Title>Absence Manager</Title>
      <ButtonsWrapper>
        <NavButton
          onClick={() => downloadIcal(events)}
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
        isOpen={datePickerIsOpen}>
        <DatePicker
          handleRangeChange={handleDateRangeChange}
        />
      </AnimatedModal>
    </NavBar>
  );
}
