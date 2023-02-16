import styled from "styled-components";
export const WrapperChecked = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px 0;
    .custom-checkbox {
        position: absolute;
        z-index: 9;
        opacity: 0;
    }
    .custom-checkbox + label::before {
        transition: all 0.3s ease 0s;
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        -webkit-box-flex: 0;
        flex-grow: 0;
        border: 2px solid rgb(189, 189, 189);
        border-radius: 5px;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 70% 70%;
    }
    .custom-checkbox:checked + label::before {
        border-color: rgb(13, 110, 253);
        background-color: rgb(13, 110, 253);
        background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2210%22%20viewBox%3D%220%200%2012%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10%202L4.5%208L2%205.27273%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%2F%3E%0A%3C%2Fsvg%3E%0A);
    }
    label {
        display: flex;
        align-items: center;
        ${(props) => props.theme.fonts.body1};
        color: ${(props) => props.theme.palette.contentColor};
    }
`;
