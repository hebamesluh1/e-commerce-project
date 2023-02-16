import React,{useState} from 'react'


import CheckBox from '../Brands/CheckBox'
import HeadAside from '../Brands/HeadAside'
import SeeAll from '../Brands/SeeAll'


import expendLess from '../../../../../../Assets/image/ListStore/other/expand_less.png';
import expendMore from '../../../../../../Assets/image/ListStore/other/expand_more.png';



export default function Features() {
    const [showList, setShowList] = useState(false);

    const toggleShowList = () => {
    setShowList(!showList);
    };

    return (
        <div>
            <HeadAside title="Features" toggleShowList={toggleShowList} arrow={showList?expendLess:expendMore}/>
            {showList &&
                <>
                <CheckBox title="Metallic"/>
                <CheckBox title="Plastic cover"/>
                <CheckBox title="8GB Ram"/>
                <CheckBox title="Super power"/>
                <CheckBox title="Large Memory"/>
                <SeeAll />
                </>
            }
        </div>
    )
}
