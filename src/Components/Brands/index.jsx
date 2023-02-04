import React from 'react'
import CheckBox from './CheckBox'
import HeadAside from '../HeadAside'
import SeeAll from '../SeeAll'

export default function Brands() {
    return (
        <div>
            <HeadAside title="Brands"/>
            <CheckBox title="Samsung"/>
            <CheckBox title="Apple"/>
            <CheckBox title="Huawei"/>
            <CheckBox title="Pocco"/>
            <CheckBox title="Lenovo"/>
            <SeeAll />
        </div>
    )
}
