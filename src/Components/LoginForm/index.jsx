import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormHeading from "../FormHeading";
import Input from "../Input";
import { ErrorMessage, FormBox, OR, Switcher } from "./style";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom'
import { PATHS } from './../../routes/index';

export default function LoginForm() {
    const navigate = useNavigate()
    const [passwordType, SetType] = useState("password");
    const [Username, SetUsername] = useState("");
    const [Password, SetPassword] = useState("");
    const [checkbox, SetCheckbox] = useState(false);
    const [valid, setValid] = useState(false);
    const [Errors, SetErrors] = useState({});

    const schema = yup.object().shape({
        Username: yup.string().email().required(),
        Password: yup.string().required(),
        checkbox: yup
        .boolean()
        .oneOf([true], "You should check the checkbox")
        .required(),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        schema
        .validate(
            {
            checkbox,
            Password,
            Username,
            },
            { abortEarly: false }
        )
        .then(() => {
            console.log(valid);
            navigate(PATHS.LIST);
            SetErrors([]);
        })
        .catch((e) => {
            const validationErrors = {};
            e.inner.forEach(err => {
            validationErrors[err.path] = err.message;
            });
            SetErrors({...validationErrors});
            setValid(false);
        });
    };

    const handleChangeInput = (e) => {
        const { id, value } = e.target;
        id === "Username" ? SetUsername(value) : SetPassword(value);
    };

    const handleCheckbox = (e) => {
        SetCheckbox((prevState) => !prevState);
    };

    const changePasswordType = () => {
        SetType((prevState) => (prevState === "password" ? "text" : "password"));
    };



    return (
        <FormBox onSubmit={handleSubmit}>
        <FormHeading name="Sign in" />

        <Input
            id="Username"
            label="Username"
            placeholder="Email or phone"
            type="text"
            HandleInputFunction={handleChangeInput}
            value={Username}
        />
        {!Errors.Username?null: <ErrorMessage>{Errors.Username}</ErrorMessage> }

        <Input
            id="Password"
            label="Password"
            placeholder="Type here"
            type={passwordType}
            value={Password}
            IsPassword={true}
            ChangeTypeFunction={changePasswordType}
            HandleInputFunction={handleChangeInput}
        />
        {!Errors.Password?null: <ErrorMessage>{Errors.Password}</ErrorMessage> }
        <Input
            id="checkbox"
            label="Remember me"
            IsCheckBox={true}
            ChangeCheckboxState={handleCheckbox}
            checked={checkbox}
        />
        {!Errors.checkbox?null: <ErrorMessage>{Errors.checkbox}</ErrorMessage> }


        <Input IsSubmit={true} type="submit" value="Log In"/>
        <OR>OR</OR>
        <Input IsGoogle={true} />
        <Input IsFacebook={true} />
        <Switcher>
            Don’t have an account?
            <Link to={PATHS.SIGNUP} className="link">
            &nbsp;Register now
            </Link>
        </Switcher>
    </FormBox>
    );
}
