import React from 'react'

//images
import img from '../../../../../../Assets/image/electronics2/part1/Group 1004.png';
import img1 from '../../../../../../Assets/image/electronics2/part1/11png.png';
import img2 from '../../../../../../Assets/image/electronics2/part1/22.png';
import img3 from '../../../../../../Assets/image/electronics2/part1/33.png';
import img4 from '../../../../../../Assets/image/electronics2/part1/44.png';
import img5 from '../../../../../../Assets/image/electronics2/part1/55.png';

//style
import { FlexBetween } from '../../../../../../Global/components';

export default function Show() {
    return (
        <div>
            <div>
                <img src={img} alt="" />
            </div>
            <FlexBetween>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
            </FlexBetween>
        </div>
    )
}
