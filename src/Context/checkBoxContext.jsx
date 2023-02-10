import { createContext,useState,useContext } from 'react';

export const CheckBoxContext = createContext(null);

const CheckProvider = ({ children}) => {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    return (
        <CheckBoxContext.Provider value={[selectedCheckboxes, setSelectedCheckboxes]}>{children}</CheckBoxContext.Provider>
    );
};

export default CheckProvider;

export const useCheckContext = () => {
    return useContext(CheckProvider);
};