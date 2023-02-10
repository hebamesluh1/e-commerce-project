import React,{useState} from 'react'
import CheckBox from '../Brands/CheckBox'
import HeadAside from '../HeadAside'

import R1 from '../../Assets/image/ListStore/rating/1.png';
import R2 from '../../Assets/image/ListStore/rating/2.png';
import R3 from '../../Assets/image/ListStore/rating/3.png';
import R4 from '../../Assets/image/ListStore/rating/4.png';
import expendLess from '../../Assets/image/ListStore/other/expand_less.png';
import expendMore from '../../Assets/image/ListStore/other/expand_more.png';


export default function Rating() {
    const [showList, setShowList] = useState(true);

    const toggleShowList = () => {
    setShowList(!showList);
    };
    return (
        <div>
        <HeadAside title="Rating"toggleShowList={toggleShowList} arrow={showList?expendLess:expendMore}/>
            {showList &&
                <>
                <CheckBox img={R1} title="5 star"/>
                <CheckBox img={R2} title="4 star"/>
                <CheckBox img={R3} title="3 star"/>
                <CheckBox img={R4} title="2 star"/>
                </>
            }
        </div>
    )
}
