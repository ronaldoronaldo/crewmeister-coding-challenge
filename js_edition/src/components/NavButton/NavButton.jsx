import React from "react";
import {NavButtonStyle, ButtonText} from "./NavButton.style";

export default function NavButton ({ onClick, text, Icon }) {
  return (
    <NavButtonStyle
      onClick={onClick}>
      <ButtonText>
        {text}
      </ButtonText>
      <Icon/>
    </NavButtonStyle>
  )
}

