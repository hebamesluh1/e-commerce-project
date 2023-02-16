import React from 'react'

//components
import Category from './components/Category';
import Brands from './components/Brands';
import Features from './components/Features';
import Rating from './components/Rating';
import Condition from './components/Condition';
import Range from './components/Range';


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
