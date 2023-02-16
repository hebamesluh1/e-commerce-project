import React,{useState} from 'react'
import styled from "styled-components";

import HeadAside from '../Brands/HeadAside';
import SeeAll from '../Brands/SeeAll';

import expendLess from '../../../../../../Assets/image/ListStore/other/expand_less.png';
import expendMore from '../../../../../../Assets/image/ListStore/other/expand_more.png';

const UlCategory = styled.ul`
    list-style:none;
    ${props=>props.theme.fonts.body1};
    color: ${props=>props.theme.palette.gray600};
    li{
        padding:10px 0;
    }
`
export default function Category() {
    const [showList, setShowList] = useState(true);

    const toggleShowList = () => {
    setShowList(!showList);
    };
    return (
        <div>
            <HeadAside title="Category" toggleShowList={toggleShowList} arrow={showList?expendLess:expendMore}/>
            {showList &&
                <UlCategory>
                    <li>Mobile accessory</li>
                    <li>Electronics</li>
                    <li>Smartphones</li>
                    <li>Modern tech</li>
                    <li><SeeAll/></li>
                </UlCategory>
            }
        </div>
    )
}
