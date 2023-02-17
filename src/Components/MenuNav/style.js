import styled  from 'styled-components';
import { FlexBetween} from './../../Global/components';


export const UlStyled = styled(FlexBetween)`
    list-style:none;
    padding:0;
`
export const LinkStyle = styled.a`
    text-decoration:none;
    color: ${props=>props.theme.palette.contentColor};
    ${props=>props.theme.fonts.h6}

`
export const LiStyled = styled.li`
    margin-right: 1.5rem;
`
export const WrapperStyled = styled(FlexBetween)`
    padding: 15px 0;
    @media(max-width:920px){
        display:none;
    }
`