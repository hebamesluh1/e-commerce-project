import { useState } from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import FormHeading from "../FormHeading";
import Input from "../Input";
import {
    ErrorMessage,
    FormBox,
    Switcher
} from "../LoginForm/style";
import { Dflex, HR } from "./style";
import * as yup from "yup";
import { PATHS } from './../../routes/index';

export default function SignUpForm() {
    const [Name, SetName] = useState("");
    const [Surname, SetSurname] = useState("");
    const [Email, SetEmail] = useState("");
    const [Phone, SetPhone] = useState("");
    const [Password, SetPassword] = useState("");
    const [RepeatPassword, SetRepeatPassword] = useState("");
    const [checkbox, SetCheckbox] = useState(false);
    const [valid,setValid]=useState(false);
    const [Errors, SetErrors] = useState({});

    const navigate = useNavigate('');

    const schema = yup.object().shape({
    Name: yup.string().required(),
    Surname: yup.string().required(),
    Email: yup.string().email().required(),
    Phone: yup.string().required(),
    Password: yup.string().min(8).required(),
    RepeatPassword: yup
        .string()
        .min(8)
        .required()
        .oneOf([yup.ref("Password"), null], "Password Must match"),
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
            Name,
            Surname,
            Email,
            Phone,
            Password,
            RepeatPassword,
            checkbox,
            },
            { abortEarly: false }
        )
        .then(() => {
            console.log("valid");
            navigate(PATHS.LIST);
            setValid(true);
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
        // console.log(Errors.Name);
    };
    const handleChangeInput = (e, Tel) => {
        const { id, value } = e.target;
        if (id === "Name") {
        SetName(value);
        }
        if (id === "Surname") {
        SetSurname(value);
        }
        if (id === "Email") {
        SetEmail(value);
        }
        if (id === "Phone") {
        SetPhone(Tel + value);
        }
        if (id === "Password") {
        SetPassword(value);
        }
        if (id === "RepeatPassword") {
        SetRepeatPassword(value);
        }
    };

    const handleCheckbox = (e) => {
        SetCheckbox((prevState) => !prevState);
    };
    return (
        <FormBox onSubmit={handleSubmit}>
        <FormHeading name="Register" />

        <Dflex>
            <Input
            halfWidth={true}
            id="Name"
            label="Name"
            placeholder="Type here"
            type="text"
            HandleInputFunction={handleChangeInput}
            value={Name}
            />
            <Input
            halfWidth={true}
            id="Surname"
            label="Surname"
            placeholder="Type here"
            type="text"
            HandleInputFunction={handleChangeInput}
            value={Surname}
            />
        </Dflex>

        {!Errors.Name?null: <ErrorMessage>{Errors.Name}</ErrorMessage> }
        {!Errors.Surname?null: <ErrorMessage>{Errors.Surname}</ErrorMessage> }
        <Input
            id="Email"
            label="Your e-mail "
            placeholder="example@mail.com"
            type="text"
            HandleInputFunction={handleChangeInput}
            value={Email}
        />
        {!Errors.Email?null: <ErrorMessage>{Errors.Email}</ErrorMessage> }


        <Input
            id="Phone"
            label="Phone"
            placeholder="00-000-00-00"
            type="text"
            Select={true}
            value={Phone}
            HandleInputFunction={handleChangeInput}
        />
        {!Errors.Phone?null: <ErrorMessage>{Errors.Phone}</ErrorMessage> }


        <Input
            id="Password"
            label="Password"
            placeholder="At least 6 characters."
            type="password"
            value={Password}
            HandleInputFunction={handleChangeInput}
        />
        {!Errors.Password?null: <ErrorMessage>{Errors.Password}</ErrorMessage> }


        <Input
            id="RepeatPassword"
            label="Repeat password"
            placeholder="Type here"
            type="password"
            value={RepeatPassword}
            HandleInputFunction={handleChangeInput}
        />
        {!Errors.RepeatPassword?null: <ErrorMessage>{Errors.RepeatPassword}</ErrorMessage> }


        <Input IsSubmit={true} type="submit" value="Register now" />
        <Input
            id="checkbox"
            label="I agree with "
            IsCheckBox={true}
            terms={true}
            ChangeCheckboxState={handleCheckbox}
            checked={checkbox}
        />
        {!Errors.checkbox?null: <ErrorMessage>{Errors.checkbox}</ErrorMessage> }
        <HR/>
        <Switcher>
            Already have an accaunt?
            <NavLink to="/login" className="link">
            &nbsp;Login
            </NavLink>
        </Switcher>
        </FormBox>
    );
}