import React from 'react'
import styled from 'styled-components'

const HrStyled = styled.hr`
    height:1px;
    background-color:${props=>props.theme.palette.gray300};
    border:none
`
export default function Hr() {
    return (
        <HrStyled/>
    )
}
