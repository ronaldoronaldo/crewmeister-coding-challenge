import styled from 'styled-components'
import {button, colors, fontWeights, radius, spacing, transitions} from "../../config/styleGuide";

export const ApplyButton = styled.button`
  display: flex;
  align-items: center;
  background-color:  ${colors.calendarBlue};
  border-radius: ${radius};
  color: ${colors.white};
  border: 1px solid ${colors.calendarBlue};
  height: ${button.small};
  width: auto;
  padding: 0 ${spacing.small};
  justify-content: center;
  cursor: pointer;
  transition: ${transitions.buttonBackground};
  &:hover {
    background-color: ${colors.white};
    color: ${colors.calendarBlue};
  }
`

export const DatePickerFooter = styled.div`
  display: flex;
  padding: ${spacing.medium};
  flex: 1;
  border-top: solid 1px ${colors.datePickerGray};
  justify-content: flex-end;
`
