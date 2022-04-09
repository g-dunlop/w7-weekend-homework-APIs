import React from 'react';

const SearchBar = ({searchApi}) => {


    const handleSubmit = (evt) => {
        evt.preventDefault()
        // console.log(evt.target.searchItem.value)
        searchApi(evt.target.searchItem.value)
        // console.log(evt.target.searchItem.value)
    }


    return(
        <div>
            <h3 >SearchBar</h3>
            <form id="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" name="searchItem" />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default SearchBar;