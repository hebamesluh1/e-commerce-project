import React from "react";

import { ButtonStyled } from "../../../../../../Components/TopFooter/style";
import { FlexCenter } from "../../../../../../Global/components";
import {
  FormStyle,
  HeadFormStyle,
  InputStyled,
  TextArea,
  Select,
} from "./style";
import styled from "styled-components";

const Div = styled.div`
  margin: 20px;
  flex-basis: 40%;
  @media (max-width: 920px) {
    display: none;
  }
`;
export default function SupplierForm() {
  return (
    <Div>
      <FormStyle>
        <HeadFormStyle>Send quote to suppliers</HeadFormStyle>
        <InputStyled type="text" placeholder="What item you need ?" />
        <TextArea
          name="details"
          rows="3"
          placeholder="Type more details"
        ></TextArea>
        <FlexCenter>
          <InputStyled type="text" placeholder="Quantity" />
          <Select>
            <option value="Pcs">Pcs</option>
          </Select>
        </FlexCenter>
        <ButtonStyled>Send inquiry</ButtonStyled>
      </FormStyle>
    </Div>
  );
}
