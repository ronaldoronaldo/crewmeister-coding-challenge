import styled from "styled-components";
import {colors, fontWeights, radius, spacing, text} from "../../config/styleGuide";

export const EventStyle = styled.div`
  ${({ isSickness }) => `
    border-radius: ${radius};
    background-color: ${isSickness ? colors.sickness : colors.vacation};
    padding: ${spacing.xSmall} ${spacing.small};
    font-weight: ${fontWeights.bold};
    color: ${colors.white};
    font-size: ${text.paragraph};
    margin-right: ${spacing.small};
  `};
`;
