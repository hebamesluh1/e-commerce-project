import styled from "styled-components";

export const Style = styled.div`
  ul {
    list-style: none;
  }
  li {
    padding: 10px;
    margin: 10px;
    color: ${(props) => props.theme.palette.gray600};
    cursor: pointer;
  }
  .active {
    background: #e5f1ff;
    color: ${(props) => props.theme.palette.contentColor};
    border-radius: 6px;
  }
  @media (max-width: 920px) {
    display: none;
  }
`;
