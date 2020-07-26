import styled from "styled-components";
import {colors, fontWeights, radius, screens, spacing, text, transitions} from "../../config/styleGuide";

export const EventStyle = styled.div`
  ${({ isSickness }) => `
    border-radius: ${radius};
    background-color: ${isSickness ? colors.sickness : colors.vacation};
    padding: ${spacing.xSmall} ${spacing.small};
    margin-right: ${spacing.xSmall};
    cursor: pointer;
    transition: ${transitions.buttonBackground};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${colors.white};
    &:hover {
      background-color: ${isSickness ? colors.darkSickness : colors.darkVacation};
    }
    @media (min-width: ${screens.medium}) {
      margin-right: ${spacing.small};
    }
  `};
`;

export const EventText = styled.span`
  font-weight: ${fontWeights.bold};
  color: ${colors.white};
  font-size: ${text.bodySmall};
  @media (min-width: ${screens.medium}) {
    font-size: ${text.paragraph};
  }
`;

export const EventType = styled(EventText)`
  display: none;
  @media (min-width: ${screens.medium}) {
    display: flex;
  }
`;
