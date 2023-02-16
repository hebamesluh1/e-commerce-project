import React from 'react'
import styled from 'styled-components'

const SeeStyle = styled.div`
    padding-bottom:10px;
    a{
        color:#0D6EFD;
    }
`
export default function SeeAll() {
    return (
        <SeeStyle><a href="/#">See all</a></SeeStyle>
    )
}
