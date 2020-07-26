import React from "react";
import moment from "moment";
import { ButtonsWrapper, ToolbarContainer, ToolbarButton, Title } from "./Toolbar.style.jsx";

export default function Toolbar(toolbar) {
  const goToDayView = () => {
    toolbar.onView('day');
  }
  const goToWeekView = () => {
    toolbar.onView('week');
  }
  const goToMonthView = () => {
    toolbar.onView('month');
  }

  const goToBack = () => { toolbar.onNavigate('PREV'); };
  const goToNext = () => { toolbar.onNavigate('NEXT'); };
  const goToCurrent = () => { toolbar.onNavigate('TODAY'); };

  const renderTitle = () => {
    const date = moment(toolbar.date);
    return (
      <Title><b>{date.format('MMMM')}</b> {date.format('YYYY')}</Title>
    );
  };

  return (
    <ToolbarContainer>
      <ButtonsWrapper>
        <ToolbarButton onClick={goToCurrent}>Today</ToolbarButton>
        <ToolbarButton onClick={goToBack}>Back</ToolbarButton>
        <ToolbarButton onClick={goToNext}>Next</ToolbarButton>
      </ButtonsWrapper>
      {renderTitle()}
      <ButtonsWrapper>
        <ToolbarButton onClick={goToDayView}>Day</ToolbarButton>
        <ToolbarButton onClick={goToWeekView}>Week</ToolbarButton>
        <ToolbarButton onClick={goToMonthView}>Month</ToolbarButton>
      </ButtonsWrapper>
    </ToolbarContainer>
  );
}
