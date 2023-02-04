import React from 'react'
import styled  from 'styled-components';

const ListFooterStyled = styled.ul`
    list-style:none;
`
const ListHead = styled.li`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color:${props=>props.theme.palette.contentColor};
`
const ListBody = styled.li`
    color:${props=>props.theme.palette.gray500};
    font-size: 16px;
`
export default function FooterList({title,content1,content2,content3,content4,content5}) {
    return (
        <div>
            <ListFooterStyled>
                <ListHead>{title}</ListHead>
                <ListBody>{content1}</ListBody>
                <ListBody>{content2}</ListBody>
                <ListBody>{content3}</ListBody>
                <ListBody>{content4}</ListBody>
                <ListBody>{content5}</ListBody>
            </ListFooterStyled>
        </div>
    )
}
