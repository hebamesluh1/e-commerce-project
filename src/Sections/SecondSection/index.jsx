import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderSection from '../../Components/HeaderSection'

export default function SecondSection() {
    return (
        <div style={{flexBasis:'80%'}}>
            <HeaderSection />
            <Outlet />
        </div>
    )
}
