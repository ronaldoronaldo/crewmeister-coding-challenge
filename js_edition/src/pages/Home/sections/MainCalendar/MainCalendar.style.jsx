import styled from "styled-components";
import {spacing, screens} from "../../../../config/styleGuide";

export const MainCalendarWrapper = styled.section`
  padding: ${spacing.small} 0;
  @media (min-width: ${screens.small}) {
    padding: ${spacing.large} ${spacing.xLarge};
  }
`;
