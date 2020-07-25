import styled from "styled-components";

const Event = styled.div`
  border-radius: 5px;
  strong {
    margin-left: 10px;
  }
`;

export const SicknessEvent = styled(Event)`
  background-color: var(--sickness);
`;
export const VacationEvent = styled(Event)`
  background-color: var(--vacation);
`;
