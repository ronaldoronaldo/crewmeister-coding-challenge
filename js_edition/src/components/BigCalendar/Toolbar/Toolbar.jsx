import React from "react";
import moment from "moment";
import { ToolbarStyle } from "./Toolbar.style.jsx";

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

  const label = () => {
    console.log(toolbar)
    const date = moment(toolbar.date);
    return (
      <span><b>{date.format('MMMM')}</b><span> {date.format('YYYY')}</span></span>
    );
  };

  return (
    <div>
      <label>{label()}</label>

      <div>
        <button onClick={goToCurrent}>Today</button>
        <button onClick={goToBack}>Back</button>
        <button onClick={goToNext}>Next</button>
        <button onClick={goToDayView}>Day</button>
        <button onClick={goToWeekView}>Week</button>
        <button onClick={goToMonthView}>Month</button>
      </div>
    </div>
  );
}
