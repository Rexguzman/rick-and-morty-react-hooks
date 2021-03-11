import React from 'react'
import {SearchBarContainer} from './SearchBar.styled'

const SearchBar = ({value, handleSearch, reference}) => {
    return (
        <SearchBarContainer>
            <input type="text" value={value} onChange={handleSearch} ref={reference} placeholder="Buscar Personaje" />
        </SearchBarContainer>
    )
}

export default SearchBar
