import React from "react";
import styled from "styled-components";
import FormFooter from "../Components/FormFooter";
import SignUpForm from "../Components/SignUpForm";

const SignUpPage = styled.section`
    // background:#eff2f4;
    // height:100vh;
`;

export default function SignUp() {
    return (
        <SignUpPage>
            <SignUpForm />
            <FormFooter />
        </SignUpPage>
    );
}