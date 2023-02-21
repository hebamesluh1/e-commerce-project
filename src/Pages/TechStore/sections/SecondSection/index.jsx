import React,{Suspense} from 'react'
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
            <Suspense fallback={<div className="lds-dual-ring"></div>}>
            <Outlet />
          </Suspense>
        </Style>
    )
}
