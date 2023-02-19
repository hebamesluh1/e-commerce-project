import styled from "styled-components";

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 75% 20%;
  gap: 5%;
  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;
