import React from "react";
import '../App.css'

const SearchOptions = ({ searchType, setSearchType, searchValue, setSearchValue,page }) => {

    const flag=true;
    return (
        <>
            <label htmlFor="search-type">Search by: </label>
            <select
                id="search-type"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
            >
                <option value="id">ID</option>
                <option value="title">Title</option>
                {page=='todos'?(<option value="completed">not completed</option>):null}
                <option value="all">all</option>
            </select>

            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <br />
        </>

    )
}
export default SearchOptions;