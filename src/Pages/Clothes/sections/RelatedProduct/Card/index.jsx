import React from 'react';
import { P,DivWrapper, ImgBorder} from './style';

export default function Card6({img}) {
    return (
        <div>
            <ImgBorder><img src={img} alt="" /></ImgBorder>
            <DivWrapper>
                <P>Xiaomi Redmi 8 Original </P>
                <P color='gray'>$32.00-$40.00</P>
            </DivWrapper>
        </div>
    )
}
