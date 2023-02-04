import React from 'react'
import CheckBox from '../Brands/CheckBox'
import HeadAside from '../HeadAside'

import R1 from '../../Assets/image/ListStore/rating/1.png';
import R2 from '../../Assets/image/ListStore/rating/2.png';
import R3 from '../../Assets/image/ListStore/rating/3.png';
import R4 from '../../Assets/image/ListStore/rating/4.png';
export default function Rating() {
    return (
        <div>
        <HeadAside title="Rating"/>
        <CheckBox img={R1}/>
        <CheckBox img={R2}/>
        <CheckBox img={R3}/>
        <CheckBox img={R4}/>
    </div>
    )
}
