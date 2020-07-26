import styled from 'styled-components'
import {text, spacing, colors, radius, button, transitions, screens} from "../../config/styleGuide";

export const ButtonText = styled.span`
  font-size: ${text.paragraph};
  margin-right: ${spacing.small};
  color: ${colors.primaryText};
  display: none;
  @media (min-width: ${screens.small}) {
    display: flex;
  }
`

export const NavButtonStyle = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-radius: ${radius};
  border: 1px solid transparent;
  height: ${button.small};
  width: auto;
  padding: 0;
  margin-right: ${spacing.large};
  justify-content: center;
  cursor: pointer;
  transition: ${transitions.buttonBackground};
  &:hover {
    background-color: ${colors.darkWhite};
  }
  
  @media (min-width: ${screens.small}) {
    border: 1px solid ${colors.gray};
    padding: 0 ${spacing.medium};
    margin-right: ${spacing.xLarge};
  }
`
