import React, { useEffect, useContext,useState } from "react";
import { WrapperChecked } from "./style";
import {CheckBoxContext} from "../../../../../../../Context/checkBoxContext";

export default function CheckBox({ title, img,value=false}) {

    const [checked, setChecked] = useState(value);

    const [selectedCheckboxes, setSelectedCheckboxes] =
        useContext(CheckBoxContext);

    const handleCheckboxClick = (event) => {
        const { name } = event.target;
        if (selectedCheckboxes.includes(name)) {
        setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== name));
        } else {
        setSelectedCheckboxes([...selectedCheckboxes, name]);
        }
    };

    useEffect(() => {
        setChecked(value);
    }, [setChecked, value]);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    const handleChange = (e) => {
        console.log("test");
        handleCheckboxClick(e);
        toggleChecked();
    };


    return (
        <WrapperChecked>
        <input
        id={title}
            type="checkbox"
            className="custom-checkbox"
            name={title}
            onChange={handleChange}
            checked={checked}
        />
        <label htmlFor={title}>{title}</label>
        <img src={img} alt="" />
        </WrapperChecked>
    );
}
