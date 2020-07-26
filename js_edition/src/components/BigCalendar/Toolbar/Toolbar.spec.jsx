import React from "react";
import { render } from "@testing-library/react";
import moment from "moment";

import Toolbar from "./Toolbar";

describe("<Event />", () => {
  it("should match snapshot", () => {
    const { container } = render(<Toolbar />);
    expect(container).toMatchSnapshot();
  });
});
