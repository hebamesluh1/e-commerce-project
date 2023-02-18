import styled from "styled-components";

export const BoxWrapper = styled.div`
  border: 1px solid #e0e0e0;
  position: relative;
  color: ${(props) => props.theme.palette.contentColor};
  .body-box {
    padding: 20px;
  }
  .icon {
    position: absolute;
    background: #d1e7ff;
    padding: 10px;
    border-radius: 50%;
    bottom: 25%;
    right: 10%;
    border: 1px solid ${(props) => props.theme.palette.sectionBackground};
  }
`;
