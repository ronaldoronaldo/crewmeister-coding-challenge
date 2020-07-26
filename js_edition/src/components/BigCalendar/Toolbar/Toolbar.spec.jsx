import React from "react";
import { render } from "@testing-library/react";
import moment from "moment";

import Toolbar from "./Event";

describe("<Event />", () => {
  it("should match snapshot when is sickness", () => {
    const event = {
      id: 1,
      title: "Mike",
      allDay: true,
      type: "sickness",
      start: moment("2017-01-01"),
      end: moment("2017-01-01"),
    };
    const { container } = render(<Toolbar event={event} />);
    expect(container).toMatchSnapshot();
  });
  it("should match snapshot when is on vacation", () => {
    const event = {
      id: 2,
      title: "Tom",
      allDay: true,
      type: "vacation",
      start: moment("2017-01-02"),
      end: moment("2017-01-04"),
    };
    const { container } = render(<Toolbar event={event} />);
    expect(container).toMatchSnapshot();
  });
});
