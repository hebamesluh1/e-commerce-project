import React, { Fragment, useContext, useState } from "react";
import clear from "../../../../../../../../Assets/image/electronics1/clear.png";
import { WrapperSuggestion, BoxSuggestion } from "./style";
import { CheckBoxContext } from "../../../../../../../../Context/checkBoxContext";


export default function Suggestion() {
    const [selectedCheckboxes,setSelectedCheckboxes] = useContext(CheckBoxContext);
    const [isHidden, setIsHidden] = useState(false);
    const clearAll = () => {
        setIsHidden(true);
        setSelectedCheckboxes(false);

    };
    return (
        <WrapperSuggestion>
        {!isHidden && (
            <>
            {selectedCheckboxes.map((checkbox) => (
                <Fragment key={checkbox}>
                <BoxSuggestion>
                    <p>{checkbox}</p>
                    <img src={clear} alt="clear" />
                </BoxSuggestion>
                </Fragment>
            ))}
            {selectedCheckboxes.length === 0 ? (
                ""
            ) : (
                <div>
                <span onClick={clearAll} style={{ cursor: "pointer" }}>
                    Clear all filter
                </span>
                </div>
            )}
            </>
        )}
        </WrapperSuggestion>
    );
}
