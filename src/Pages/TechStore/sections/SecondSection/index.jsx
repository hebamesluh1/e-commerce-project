import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import HeaderSection from './components/HeaderSection'

const Style=styled.div`
flex-basis:80%;
`
export default function SecondSection() {
    return (
        <Style>
            <HeaderSection />
            <Outlet />
        </Style>
    )
}
