import React,{useState} from 'react'
import CheckBox from './CheckBox'
import HeadAside from './HeadAside'
import SeeAll from './SeeAll';


import expendLess from '../../../../../../Assets/image/ListStore/other/expand_less.png';
import expendMore from '../../../../../../Assets/image/ListStore/other/expand_more.png';

export default function Brands() {
    const [showList, setShowList] = useState(false);
    
    const toggleShowList = () => {
    setShowList(!showList);
    };
    return (
        <div>
            <HeadAside title="Brands" toggleShowList={toggleShowList} arrow={showList?expendLess:expendMore}/>
            {showList &&
            <>
            <CheckBox title="Samsung"/>
            <CheckBox title="Apple"/>
            <CheckBox title="Huawei"/>
            <CheckBox title="Pocco"/>
            <CheckBox title="Lenovo"/>
            <SeeAll />
            </>
            }
        </div>
    )
}
