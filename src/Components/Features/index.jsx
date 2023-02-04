import React from 'react'
import CheckBox from '../Brands/CheckBox'
import HeadAside from '../HeadAside'
import SeeAll from '../SeeAll'

export default function Features() {
    return (
        <div>
            <HeadAside title="Features"/>
            <CheckBox title="Metallic"/>
            <CheckBox title="Plastic cover"/>
            <CheckBox title="8GB Ram"/>
            <CheckBox title="Super power"/>
            <CheckBox title="Large Memory"/>
            <SeeAll />
        </div>
    )
}
