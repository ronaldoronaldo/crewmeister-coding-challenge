import React from "react";
import { render } from "@testing-library/react";
import moment from "moment";

import BigCalendar from "../BigCalendar";

describe("<BigCalendar />", () => {
  it("should match snapshot", () => {
    const events = [
      {
        id: 1,
        title: "Mike",
        allDay: true,
        type: "sickness",
        start: moment("2017-01-01"),
        end: moment("2017-01-01"),
      },
      {
        id: 2,
        title: "Tom",
        allDay: true,
        type: "vacation",
        start: moment("2017-01-02"),
        end: moment("2017-01-04"),
      },
    ];
    const { container } = render(<BigCalendar events={events} />);
    expect(container).toMatchSnapshot();
  });
});
