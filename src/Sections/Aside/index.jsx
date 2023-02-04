import React from 'react'
import Category from '../../Components/Category';
import Brands from '../../Components/Brands';
import Features from '../../Components/Features';
import Rating from '../../Components/Rating';
import Condition from '../../Components/Condition';
import Range from '../../Components/Range';
export default function Aside() {
    return (
        <div style={{flexBasis:'30%'}}>
            <Category />
            <Brands />
            <Features />
            <Range />
            <Condition />
            <Rating />
        </div>
    )
}
