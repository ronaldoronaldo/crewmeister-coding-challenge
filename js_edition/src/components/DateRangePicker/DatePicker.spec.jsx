import React from "react";

import { render } from "@testing-library/react";

import DatePicker from "./DatePicker";

describe("<DatePicker />", () => {
  it("should match snapshot", () => {
    const { container } = render(<DatePicker />);
    expect(container).toMatchSnapshot();
  });
});
