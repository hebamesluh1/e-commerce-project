import React from 'react';

import {Style,WrapperItems,HeadHero,HeadHero2,Button} from './style';

export default function MainHero({image,title}) {
    return (
        <Style image={image}>
            <WrapperItems>
                <HeadHero>Lastest trending</HeadHero>
                <HeadHero2>{title}</HeadHero2>
                <Button>Learn more</Button>
            </WrapperItems>
        </Style>
    )
}
