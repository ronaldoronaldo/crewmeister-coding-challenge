import styled from "styled-components";
import {colors, screens, spacing, text} from "../../../styles/styleGuide";
import {ButtonStyle} from "../../../styles/commun";

export const ButtonsWrapper = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 120px;
  margin: 0;
  @media (min-width: ${screens.small}) {
    margin: 0 ${spacing.large};
    width: 140px;
  }
  @media (min-width: ${screens.medium}) {
    width: 220px;
    margin: 0;
  }
`;

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${spacing.medium};
  align-items: center;
`;

export const ToolbarButton = styled(ButtonStyle)``;

export const Title = styled.span`
  font-size: ${text.bodySmall};
  color: ${colors.primaryText};
  @media (min-width: ${screens.small}) {
    font-size: ${text.middleText};
  }
  @media (min-width: ${screens.medium}) {
    font-size: ${text.paragraph};
  }
`;
