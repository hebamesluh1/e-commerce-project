import styled from "styled-components";
import { FlexCenter } from "../../../../../../Global/components";

export const TimeBlock = styled(FlexCenter)`
    padding: 8px 11px;
    border-radius: 4px;
    background-color: ${props => props.theme.palette.gray800};
    color:${props => props.theme.palette.sectionBackground};
    flex-direction: column;
    gap: 2px;
`

export const Wrapper = styled(FlexCenter)`
    justify-content: flex-start;
    gap: 6px;
`