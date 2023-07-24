import React from 'react'

//images
import check from '../../../../../../Assets/image/electronics2/part1/check.png';

//style
import  styled  from 'styled-components';
import { FlexDiv } from '../../../../../../Global/components';
import {P} from '../../../RelatedProduct/Card/style';
import { H4Styling } from '../../../../../../Global/components';
import { useParams } from 'react-router-dom';
import { products } from '../../../../../../mock/products';

const H3 = styled.h3`
    ${props=>props.theme.fonts.body1};
    color: #00B517;
`
const Bg=styled.div`
    background: #FFF0DF;
    display:flex;
    align-item:center;
    justify-content:space-between;
    padding:10px;
`
const Border = styled.div`
    border-left: 1px solid ${props=>props.theme.palette.gray300};
    border-right: 1px solid ${props=>props.theme.palette.gray300};
    padding: 0 10%;
`
const BorderBottom=styled.div`
    border-bottom: 1px solid #E0E0E0;
`
export default function Details() {
    const {id} = useParams();
    const myData = products.find((item) => item.id === Number(id));
    console.log(myData);
    return (
        <div>
            <FlexDiv>
                <img src={check} alt="" />
                <H3>In stock</H3>
            </FlexDiv>
            <div style={{alignItems: "center",display: "flex", flexDirection: "column"}}>
                <h2>{myData.title}</h2>
                <img src={myData.img} alt="" />
            </div>
            <Bg>
                <div><H4Styling style={{color: '#FA3434'}}>${myData.price}</H4Styling><P>50-100 pcs</P></div>
                <Border><H4Styling>$90.00</H4Styling><P>100-700 pcs</P></Border>
                <div><H4Styling>$78.00</H4Styling><P>700+ pcs</P></div>
            </Bg>
            <div>
                <BorderBottom>
                    <FlexDiv>
                        <P style={{flexBasis: "20%",color:'#8B96A5'
}}>Price:</P> <P>Negotaible</P>
                    </FlexDiv>
                </BorderBottom>
                <BorderBottom>
                    <FlexDiv>
                        <P style={{flexBasis: "20%" ,color:'#8B96A5'}}>Type:</P>
                        <P>Classic material</P>
                    </FlexDiv>
                    <FlexDiv>
                        <P style={{flexBasis: "20%" ,color:'#8B96A5'}}>Material:</P>
                        <P>Plastic material</P>
                    </FlexDiv>
                    <FlexDiv>
                        <P style={{flexBasis: "20%" ,color:'#8B96A5'}}>Design:</P>
                        <P>Modern nice</P>
                    </FlexDiv>
                </BorderBottom>
                <BorderBottom>
                <FlexDiv>
                        <P style={{flexBasis: "20%" ,color:'#8B96A5'}}>Customization:</P>
                        <P>Customized logo and design custom packages</P>
                    </FlexDiv>

                    <FlexDiv>
                        <P style={{flexBasis: "20%" ,color:'#8B96A5'}}>Protection:</P>
                        <P>Refund Policy</P>
                    </FlexDiv>

                    <FlexDiv>
                        <P style={{flexBasis: "20%" ,color:'#8B96A5'}}>Warranty:</P>
                        <P>2 years full warranty</P>
                    </FlexDiv>
                </BorderBottom>
            </div>
        </div>
    )
}
