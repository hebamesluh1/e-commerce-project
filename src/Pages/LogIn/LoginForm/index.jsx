import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FormHeading from "../../../Components/FormHeading";
import Input from "../../../Components/Input";
import { ErrorMessage, FormBox, OR, Switcher } from "./style";
import * as yup from "yup";
import { PATHS } from '../../../routes';
import { useAuthContext } from '../../../Context/authContext';

export default function LoginForm() {


    const {
        loading,
        setLoading,
        setToken,
        login,
        setUserName
    } = useAuthContext();


    const [passwordType, setType] = useState("password");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    const [valid, setValid] = useState(false);
    const [errors, setErrors] = useState({});

    const schema = yup.object().shape({
        username: yup.string().email().required(),
        password: yup.string().required(),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        schema
        .validate(
            {
            checkbox,
            password,
            username,
            },
            { abortEarly: false }
        )
        .then(async ({ username, password }) => {
            const res = await axios.post('https://react-tt-api.onrender.com/api/users/login', {
                email: username,
                password,
            });
            if (res) {
                setToken(res.data.token)
                setUserName(res.data.name)
                localStorage.setItem('name', res.data.name);
                localStorage.setItem('token',res.data.token);
                login();
            }
            console.log(valid);
            setErrors([]);
        })
        .catch((e) => {
            const validationErrors = {};
            e.inner.forEach(err => {
            validationErrors[err.path] = err.message;
            });
            setErrors({...validationErrors});
            setValid(false);
        }).finally(()=>setLoading(false))
    };

    const handleChangeInput = (e) => {
        const { id, value } = e.target;
        id === "username" ? setUsername(value) : setPassword(value);
    };

    const handleCheckbox = () => {
        setCheckbox((prevState) => !prevState);
    };

    const changePasswordType = () => {
        setType((prevState) => (prevState === "password" ? "text" : "password"));
    };



    return (
        <FormBox onSubmit={handleSubmit}>
        <FormHeading name="Sign in" />

        <Input
            id="username"
            label="Username"
            placeholder="Email or phone"
            type="text"
            HandleInputFunction={handleChangeInput}
            value={username}
        />
        {!errors.username?null: <ErrorMessage>{errors.username}</ErrorMessage> }

        <Input
            id="password"
            label="Password"
            placeholder="Type here"
            type={passwordType}
            value={password}
            IsPassword={true}
            ChangeTypeFunction={changePasswordType}
            HandleInputFunction={handleChangeInput}
        />
        {!errors.password?null: <ErrorMessage>{errors.password}</ErrorMessage> }
        <Input
            id="checkbox"
            label="Remember me"
            IsCheckBox={true}
            ChangeCheckboxState={handleCheckbox}
            checked={checkbox}
        />
        {!errors.checkbox?null: <ErrorMessage>{errors.checkbox}</ErrorMessage> }


        <Input IsSubmit={true} type="submit" value={loading?'Loading...':"Log In"}/>
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
