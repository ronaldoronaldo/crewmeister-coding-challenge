import styled from 'styled-components'
import {text, spacing, colors, radius, button, transitions} from "../../config/styleGuide";

export const ButtonText = styled.span`
  font-size: ${text.paragraph};
  margin-right: ${spacing.small};
  color: ${colors.primaryText};
`

export const NavButtonStyle = styled.button`
  display: flex;
  align-items: center;
  margin-right: ${spacing.xLarge};
  background-color: transparent;
  border-radius: ${radius};
  border: 1px solid ${colors.gray};
  height: ${button.small};
  width: auto;
  padding: 0 ${spacing.medium};
  justify-content: center;
  cursor: pointer;
  transition: ${transitions.buttonBackground};
  &:hover {
    background-color: ${colors.darkWhite};
  }
`
