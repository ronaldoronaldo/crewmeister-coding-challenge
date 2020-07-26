import styled from 'styled-components'
import {fontWeights, text, spacing, colors, radius, button} from "../../../../config/styleGuide";

export const NavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 64px;
  align-items: center;
  border-bottom: 1px solid ${colors.lightGray};
`

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-left: ${spacing.xLarge};
`

export const Title = styled.span`
  font-size: ${text.h[3]};
  font-weight: ${fontWeights.bold};
  color: ${colors.primaryText};
`

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-right: ${spacing.xLarge};
`

export const IcalDownloadButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: ${spacing.large};
  background-color: transparent;
  border-radius: ${radius};
  border: 1px solid ${colors.gray};
  height: ${button.small};
  width: 120px;
  justify-content: center;
`
