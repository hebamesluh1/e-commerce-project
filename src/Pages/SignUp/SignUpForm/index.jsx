import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import FormHeading from "../../../Components/FormHeading";
import Input from "../../../Components/Input";
import {
    ErrorMessage,
    FormBox,
    Switcher
} from "../../LogIn/LoginForm/style";
import { Dflex, HR } from "./style";
import * as yup from "yup";
import { PATHS } from '../../../routes/index';
import { useAuthContext } from '../../../Context/authContext';

export default function SignUpForm() {


    const {
        loading,
        setLoading,
        setUserName,
        setToken,
        login,
    } = useAuthContext();


    const [name, setName] = useState("");
    const [surName, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    const [valid,setValid]=useState(false);
    const [errors, setErrors] = useState({});


    const schema = yup.object().shape({
    name: yup.string()
    .required("Please enter your name"),

    surName: yup.string()
    .required("Please enter your surName"),

    email: yup.string()
    .email("Invalid email address").required("Please enter your email"),

    phone: yup.string()
    .required("Please enter your phone number"),

    password: yup.string()
    .min(8,"password must be more than 8")
    .matches(/[a-z]/g,"password must contain at least one character ")
    .matches(/\d/g,"password must contain at least one digits")
    .matches(/[!@#$%^&*)(+=._-]/g,"password must contain at least one special character")
    .required("please enter your password"),


    repeatPassword: yup.string()
        .oneOf([yup.ref("password"), null],'Passwords must match')
        .required("please enter your password again"),


    checkbox: yup.boolean()
        .oneOf([true], "You should check the checkbox")
        .required(),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        schema
        .validate(
            {
            name,
            surName,
            email,
            phone,
            password,
            repeatPassword,
            checkbox,
            },
            { abortEarly: false }
        )
        .then(async() => {
            const res = await axios.post(
                "https://react-tt-api.onrender.com/api/users/signup",
                {
                name: name,
                email:email,
                password:password,
                }
            );
            if (res) {
                setToken(res.data.token);
                setUserName(res.data.name);
                localStorage.setItem("token",res.data.token);
                localStorage.setItem("name",res.data.name);
                login();
                console.log(valid);
            }
            setValid(true);
            setErrors([]);
        })
        .catch((e) => {
            const validationErrors = {};
            e.inner.forEach(err => {
            validationErrors[err.path] = err.message;
            });
            setErrors({...validationErrors});
            setValid(false);
        }).finally(()=> setLoading(false))

    };



    const handleChangeInput = (e, Tel) => {
        const { id, value } = e.target;
        if (id === "name") {
        setName(value);
        }
        if (id === "surName") {
        setSurname(value);
        }
        if (id === "email") {
        setEmail(value);
        }
        if (id === "phone") {
        setPhone(Tel + value);
        }
        if (id === "password") {
        setPassword(value);
        }
        if (id === "repeatPassword") {
        setRepeatPassword(value);
        }
    };


    const handleCheckbox = (e) => {
        setCheckbox((prevState) => !prevState);
    };


    return (
        <FormBox onSubmit={handleSubmit} style={{marginBottom:'20%'}}>
        <FormHeading name="Register" />

        <Dflex>
            <Input
            halfWidth={true}
            id="name"
            label="Name"
            placeholder="Type here"
            type="text"
            HandleInputFunction={handleChangeInput}
            value={name}
            />
            <Input
            halfWidth={true}
            id="surName"
            label="Surname"
            placeholder="Type here"
            type="text"
            HandleInputFunction={handleChangeInput}
            value={surName}
            />
        </Dflex>

        {!errors.name?null: <ErrorMessage>{errors.name}</ErrorMessage> }
        {!errors.surName?null: <ErrorMessage>{errors.surName}</ErrorMessage> }
        <Input
            id="email"
            label="Your e-mail "
            placeholder="example@mail.com"
            type="text"
            HandleInputFunction={handleChangeInput}
            value={email}
        />
        {!errors.email?null: <ErrorMessage>{errors.email}</ErrorMessage> }


        <Input
            id="phone"
            label="Phone"
            placeholder="00-000-00-00"
            type="text"
            Select={true}
            value={phone}
            HandleInputFunction={handleChangeInput}
        />
        {!errors.phone?null: <ErrorMessage>{errors.phone}</ErrorMessage> }


        <Input
            id="password"
            label="Password"
            placeholder="At least 6 characters."
            type="password"
            value={password}
            HandleInputFunction={handleChangeInput}
        />
        {!errors.password?null: <ErrorMessage>{errors.password}</ErrorMessage> }


        <Input
            id="repeatPassword"
            label="Repeat password"
            placeholder="Type here"
            type="password"
            value={repeatPassword}
            HandleInputFunction={handleChangeInput}
        />
        {!errors.repeatPassword?null: <ErrorMessage>{errors.repeatPassword}</ErrorMessage> }


        <Input IsSubmit={true} type="submit" value={loading?'Loading...':'Register now'} />
        <Input
            id="checkbox"
            label="I agree with "
            IsCheckBox={true}
            terms={true}
            ChangeCheckboxState={handleCheckbox}
            checked={checkbox}
        />
        {!errors.checkbox?null: <ErrorMessage>{errors.checkbox}</ErrorMessage> }
        <HR/>
        <Switcher>
            Already have an accaunt?
            <NavLink to={PATHS.LOGIN} className="link">
            &nbsp;Login
            </NavLink>
        </Switcher>
        </FormBox>
    );
}