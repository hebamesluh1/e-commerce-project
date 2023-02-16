import React,{useState} from 'react'

//components
import HeadAside from '../Brands/HeadAside'

//images
import expendLess from '../../../../../../Assets/image/ListStore/other/expand_less.png';
import expendMore from '../../../../../../Assets/image/ListStore/other/expand_more.png';

//style
import {RangeInput,ButtonRange,InputRange} from './style';


export default function Range() {

    
    const [showList, setShowList] = useState(false);
    const toggleShowList = () => {
    setShowList(!showList);
    };

    return (
        <div>
            <HeadAside title="Price range" toggleShowList={toggleShowList} arrow={showList?expendLess:expendMore}/>
            {showList &&
            <>
                <RangeInput type="range" min="5" max="10" step="2"/>
                <div style={{display:'flex'}}>
                    <div style={{marginRight:'10px'}}>
                        <span>Min</span>
                        <InputRange type="text" placeholder='0'/>
                    </div>
                    <div>
                        <span>Max</span>
                        <InputRange type="text" placeholder='999999'/>
                    </div>
                </div>
                <ButtonRange>Apply</ButtonRange>
            </>
            }
        </div>
    )
}
