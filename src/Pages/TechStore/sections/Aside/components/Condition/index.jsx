import React,{useState} from 'react'
import HeadAside from '../Brands/HeadAside';
import Radio from './Radio';

import expendLess from '../../../../../../Assets/image/ListStore/other/expand_less.png';
import expendMore from '../../../../../../Assets/image/ListStore/other/expand_more.png';

export default function Condition() {
    const [showList, setShowList] = useState(false);

    const toggleShowList = () => {
    setShowList(!showList);
    };

    return (
    <div>
        <HeadAside title="Condition" toggleShowList={toggleShowList} arrow={showList?expendLess:expendMore}/>
        {showList &&
        <>
        <Radio title="Any" checked/>
        <Radio title="Refurbished"/>
        <Radio title="Brand new"/>
        <Radio title="Old items"/>
        </>}
    </div>
    )
}
