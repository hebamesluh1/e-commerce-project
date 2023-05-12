import React from "react";
import { NavLink } from "react-router-dom";

// importing the eye icon
import eye from "../../Assets/image/Login/eye.png";
import Google from "../../Assets/image/Login/icon.png";
import Facebook from "../../Assets/image/Login/icon (1).png";
// importing styled components
import {
  FacebookButton,
  GoogleButton,
  InputBox,
  Inputt,
  Label,
  Select,
} from "./style";

const NavLinkStyle = {
  color: "#0D6EFD",
  display: "inline",
  fontWeight: "400",
  fontSize: "13px",
  position: "absolute",
  right: "0",
};

export default function Input(props) {
  const SelectRef = React.createRef();
  if (props.IsPassword) {
    return (
      <InputBox>
        <Label htmlFor={props.id}>{props.label}</Label>
        <NavLink style={NavLinkStyle} to="/changepassword">
          Forgot Password
        </NavLink>
        <Inputt
          id={props.id}
          placeholder={props.placeholder}
          type={props.type}
          onChange={props.HandleInputFunction}
          className={props.className}
        />
        {props.IsPassword ? (
          <img
            style={{
              position: "absolute",
              top: "50%",
              right: "5%",
              cursor: "pointer",
            }}
            width="22px"
            height="22px"
            src={eye}
            alt="change type eye"
            onClick={props.ChangeTypeFunction}
          />
        ) : (
          ""
        )}
      </InputBox>
    );
  }

  if (props.IsCheckBox) {
    return (
      <InputBox row={true}>
        <input
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
          id={props.id}
          type="checkbox"
          onChange={props.ChangeCheckboxState}
          checked={props.checked ? "checked" : ""}
        />
        <Label htmlFor={props.id}>
          {props.label}{" "}
          {props.terms ? (
            <NavLink style={{ color: "#0D6EFD" }} to="/Terms">
              Terms and Conditions
            </NavLink>
          ) : (
            ""
          )}
        </Label>
      </InputBox>
    );
  }
  if (props.IsSubmit) {
    return (
      <InputBox>
        <Inputt type={props.type} value={props.value} />
      </InputBox>
    );
  } else {
    if (props.IsGoogle) {
      return (
        <InputBox google>
          <GoogleButton type={"submit"}>
            <img src={Google} alt="Google icon" />
            Continue with Google
          </GoogleButton>
        </InputBox>
      );
    } else {
      if (props.IsFacebook) {
        return (
          <InputBox google>
            <FacebookButton type={"submit"}>
              <img src={Facebook} alt="Facebook icon" />
              Continue with Facebook
            </FacebookButton>
          </InputBox>
        );
      }
      if (props.halfWidth) {
        return (
          <InputBox half>
            <Label htmlFor={props.id}>{props.label}</Label>
            <Inputt
              id={props.id}
              placeholder={props.placeholder}
              type={props.type}
              onChange={props.HandleInputFunction}
              className={props.className}
            />
          </InputBox>
        );
      } else {
      }
      if (props.Select) {
        return (
          <InputBox>
            <Label htmlFor={props.id}>{props.label}</Label>
            <Inputt
              Padding
              id={props.id}
              placeholder={props.placeholder}
              type={props.type}
              className={props.className}
              onChange={(e) => {
                const Tel = SelectRef.current.value;
                props.HandleInputFunction(e, Tel);
              }}
            />
            <Select
              ref={SelectRef}
              name="Telephone"
              id="Telephone"
              className={props.className}
            >
              <option value="+998">UZ +998</option>
              <option value="+972">PS +972</option>
              <option value="+962">JO +962</option>
            </Select>
          </InputBox>
        );
      } else {
        return (
          <InputBox>
            <Label htmlFor={props.id}>{props.label}</Label>
            <Inputt
              id={props.id}
              placeholder={props.placeholder}
              type={props.type}
              onChange={props.HandleInputFunction}
              className={props.className}
            />
          </InputBox>
        );
      }
    }
  }
}