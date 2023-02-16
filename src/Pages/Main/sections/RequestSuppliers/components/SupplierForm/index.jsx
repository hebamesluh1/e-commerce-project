import React from 'react'

import {ButtonStyled} from '../../../../../../Components/TopFooter/style';
import {FlexCenter} from '../../../../../../Global/components';
import {FormStyle,HeadFormStyle,InputStyled,TextArea,Select} from './style'

export default function SupplierForm() {
    return (
        <div style={{margin:'20px', flexBasis:'40%'}}>
            <FormStyle>
            <HeadFormStyle>Send quote to suppliers</HeadFormStyle>
                <InputStyled type="text" placeholder='What item you need ?'/>
                <TextArea name="details"rows="3" placeholder='Type more details'></TextArea>
                <FlexCenter>
                    <InputStyled type="text" placeholder='Quantity' />
                    <Select>
                        <option value="Pcs">Pcs</option>
                    </Select>
                </FlexCenter>
                <ButtonStyled>Send inquiry</ButtonStyled>
            </FormStyle>
        </div>
    )
}
