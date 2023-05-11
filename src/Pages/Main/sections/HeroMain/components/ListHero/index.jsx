import styled from "styled-components";

export const ListHero = styled.button`
  outline: none;
  border: none;
  padding: 10px;
    margin: 10px;
    color: ${(props) => props.theme.palette.gray600};
    cursor: pointer;
  text-align: left;
  width: 100%;
  border-radius: 6px;
  background-color: transparent;
  transition: 0.3s all ease-in-out;
  ${(props) =>
        props.active ? `
        background: #e5f1ff;
        color: ${(props) => props.theme.palette.contentColor};
        border-radius: 6px;
        font-weight: bold;
`
            : ``}
`;
