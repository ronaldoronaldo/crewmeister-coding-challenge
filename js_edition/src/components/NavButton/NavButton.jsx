import React from "react";
import {NavButtonStyle, ButtonTextStyle} from "./NavButton.style";

export default function NavButton ({ onClick, text, Icon }) {
  return (
    <NavButtonStyle
      onClick={onClick}>
      <ButtonTextStyle>
        {text}
      </ButtonTextStyle>
      <Icon/>
    </NavButtonStyle>
  )
}

