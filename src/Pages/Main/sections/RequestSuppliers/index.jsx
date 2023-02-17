import React from "react";

import styled from "styled-components";
import { Container, FlexBetween } from "../../../../Global/components";

import SupplierForm from "./components/SupplierForm";
import SupplierTitle from "./components/SupplierTitle";

import cover from "../../../../Assets/image/main/another/Mask.png";

const WrapperRequest = styled(FlexBetween)`
  background-image: url(${cover});
  align-items: flex-start;
  margin-bottom: 30px;
  border-radius: 6px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  @media (max-width: 920px) {
    justify-content: center;
  }
`;
export default function RequestSuppliers() {
  return (
    <Container>
      <WrapperRequest>
        <SupplierTitle />
        <SupplierForm />
      </WrapperRequest>
    </Container>
  );
}
