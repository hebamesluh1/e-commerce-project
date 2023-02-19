import React from 'react'
import styled from 'styled-components'
const Style = styled.div`
    background: #EFF2F4;
    border-radius: 6px;
    color: #0D6EFD;
    padding:10px;
    width: 150px;

`
const Card = ({text}) => {
  return (
    <Style>
        {text}
    </Style>
  )
}

export default Card