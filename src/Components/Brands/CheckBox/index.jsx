import React from 'react'
import styled from 'styled-components';

const WrapperChecked = styled.div`
    display:flex;
    align-items:center;
    padding:10px 0;
    h5{
        ${props=>props.theme.fonts.body1};
        color: ${props=>props.theme.palette.contentColor};

    }
`
const StyledCheckbox = styled.input`
    width:20px;
    height:20px;
    border:2px solid #BDBDBD;
    margin-right:20px;
`;
export default function CheckBox({title,img}) {
    return (
        <WrapperChecked>
            <StyledCheckbox type="checkbox" />
            <h5>{title}</h5>
            <img src={img} alt="" />
        </WrapperChecked>
    )
}
