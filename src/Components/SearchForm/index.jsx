import React from 'react';
import { SearchFormStyled, SearchInputStyled, SearchSelectStyled, SearchSubmitStyled } from "./style";

const SearchForm = ({show}) => {
    return (
        <SearchFormStyled show={!show}>
            <SearchInputStyled type="text" placeholder="Search" />
            <SearchSelectStyled name="searchSelect" id="searchSelect">
                All category
                <option value="all"> All category</option>
                <option value="Electronics"> Electronics</option>
                <option value="Clothes"> Clothes</option>
            </SearchSelectStyled>
            <SearchSubmitStyled type="submit" value="Search" />
        </SearchFormStyled>
    );
};

export default SearchForm;
