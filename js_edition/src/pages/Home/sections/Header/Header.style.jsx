import styled from 'styled-components'
import {fontWeights, text, spacing, colors, radius, button, transitions} from "../../../../config/styleGuide";

export const NavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 64px;
  align-items: center;
  border-bottom: 1px solid ${colors.lightGray};
`

export const Logo = styled.img`
  width: 64px;
  height: 64px;
  margin-left: ${spacing.xLarge};
`

export const Title = styled.span`
  font-size: ${text.h[3]};
  font-weight: ${fontWeights.bold};
  color: ${colors.primaryText};
`

export const ButtonText = styled.span`
  font-size: ${text.paragraph};
  margin-right: ${spacing.small};
  color: ${colors.primaryText};
`

export const ButtonsWrapper = styled.div`
  display: flex;
`

export const NavButton = styled.button`
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
