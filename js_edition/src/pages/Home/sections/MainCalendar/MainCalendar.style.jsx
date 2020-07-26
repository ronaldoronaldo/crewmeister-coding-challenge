import styled from "styled-components";
import {spacing, screens} from "../../../../config/styleGuide";

export const MainCalendarWrapper = styled.section`
  padding: ${spacing.small} 0;
  @media (min-width: ${screens.medium}) {
    padding: ${spacing.large} ${spacing.xLarge};
  }
`;
