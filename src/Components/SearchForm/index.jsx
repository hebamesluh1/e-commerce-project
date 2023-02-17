import React,{useState} from 'react';


import { SearchFormStyled, SearchInputStyled, SearchSelectStyled, SearchSubmitStyled } from "./style";


import { useNavigate } from 'react-router-dom';
import { PATHS } from './../../routes/index';


const SearchForm = ({show}) => {


    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate(`${PATHS.HOME}/${selectedOption}`)
    }

    return (

        <SearchFormStyled show={!show} onSubmit={handleSubmit}>
            <SearchInputStyled type="text" placeholder="Search" />
            <SearchSelectStyled name="searchSelect" id="searchSelect" value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}>
                All category
                <option value=''> All category</option>
                <option value={PATHS.LIST}> Products</option>
            </SearchSelectStyled>
            <SearchSubmitStyled type="submit" value="Search">
                Search
            </SearchSubmitStyled>
        </SearchFormStyled>

    );
};

export default SearchForm;
