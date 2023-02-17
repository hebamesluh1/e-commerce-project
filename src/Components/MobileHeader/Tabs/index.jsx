import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const Style = styled.div`
    display:flex;
    // gap:10px;
    margin:10px 0;
    // overflow-x: scroll;
`
const Tabs = () => {
  return (
    <Style>
        <Card text="All Category"/>
        <Card text="Hot offers"/>
        <Card text="Gift boxes"/>
        <Card text="Projects"/>
        <Card text="Menu items"/>
    </Style>
  )
}

export default Tabs