import React from "react";
import { render } from "@testing-library/react";

import Toolbar from "./Toolbar";

describe("<Toolbar />", () => {
  it("should match snapshot", () => {
    const { container } = render(<Toolbar />);
    expect(container).toMatchSnapshot();
  });
});
