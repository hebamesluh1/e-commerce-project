import React,{useState} from 'react';
import { SearchFormStyled, SearchInputStyled, SearchSelectStyled, SearchSubmitStyled } from "./style";
import { Link } from 'react-router-dom';
import { PATHS } from './../../routes/index';
const SearchForm = ({show}) => {
    const [selectedOption, setSelectedOption] = useState('');
    return (
        <SearchFormStyled show={!show}>
            <SearchInputStyled type="text" placeholder="Search" />
            <SearchSelectStyled name="searchSelect" id="searchSelect" value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}>
                All category
                <option value=''> All category</option>
                <option value={PATHS.LIST}> Electronics</option>
                <option value={PATHS.CLOTHES}> Clothes</option>
            </SearchSelectStyled>
            <SearchSubmitStyled type="submit" value="Search">
                <Link to={`${PATHS.HOME}/${selectedOption}`}>Search</Link>
            </SearchSubmitStyled>
        </SearchFormStyled>
    );
};

export default SearchForm;
