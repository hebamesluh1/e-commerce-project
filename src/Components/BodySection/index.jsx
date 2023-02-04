import React from 'react'

import Card from '../Card'


import pic1 from '../../Assets/image/ListStore/components/02.png';
import pic2 from '../../Assets/image/ListStore/components/03.png';
import pic3 from '../../Assets/image/ListStore/components/04.png';
import pic4 from '../../Assets/image/ListStore/components/07.png';
import pic5 from '../../Assets/image/ListStore/components/08.png';
import pic6 from '../../Assets/image/ListStore/components/10.png';


export default function BodySection() {
    return (
        <div>
            <Card img={pic6} title="Canon Cmera EOS 2000, Black 10x zoom" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua" discount="$1128.00"/>
            <Card img={pic5} title="GoPro HERO6 4K Action Camera - Black" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "/>
            <Card img={pic4} title="GoPro HERO6 4K Action Camera - Black" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "/>
            <Card img={pic3} title="GoPro HERO6 4K Action Camera - Black" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "/>
            <Card img={pic2} title="GoPro HERO6 4K Action Camera - Black" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " discount="$1128.00"/>
            <Card img={pic1} title="GoPro HERO6 4K Action Camera - Black" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "/>
        </div>
    )
}
