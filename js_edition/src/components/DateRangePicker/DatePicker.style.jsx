import styled from 'styled-components'
import {button, colors, radius, spacing, transitions} from "../../styles/styleGuide";

export const DatePickerButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: ${spacing.medium};
  background-color:  ${colors.calendarBlue};
  border-radius: ${radius};
  color: ${colors.white};
  border: 1px solid ${colors.calendarBlue};
  height: ${button.small};
  width: auto;
  padding: 0 ${spacing.medium};
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
