import styled from 'styled-components'
import {spacing, screens} from "../../styles/styleGuide";
import {ButtonStyle, ButtonText} from "../../styles/commun";

export const ButtonTextStyle = styled(ButtonText)`
  display: none;
  @media (min-width: ${screens.medium}) {
    display: flex;
  }
`

export const NavButtonStyle = styled(ButtonStyle)`
  margin-right: ${spacing.large};
  @media (min-width: ${screens.medium}) {
    margin-right: ${spacing.xLarge};
  }

`
