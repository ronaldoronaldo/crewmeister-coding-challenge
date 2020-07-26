import React from "react";
import { render } from "@testing-library/react";
import GetAppIcon from '@material-ui/icons/GetApp';

import NavButton from "./NavButton";

describe("<NavButton />", () => {
  it("should match snapshot", () => {
    const dummyFunction = () => {}
    const { container } = render(<NavButton text="myBtn" onClick={dummyFunction} Icon={GetAppIcon}/>);
    expect(container).toMatchSnapshot();
  });
});
