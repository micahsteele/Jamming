import React, {useState} from "react";


function SearchBar() {
    const [search, setSearch] = useState('');

    const handleTextChange = ({target}) => {
        setSearch(target.value);
    };

    const handleSubmit = (event) => {
        
    }

    return (
        <form className='SearchBarForm' onSubmit={handleSubmit} >
            <input type='text' aria-label='Type in a song' placeholder='Type in a song' value={search} onChange={handleTextChange} />
            <input type='submit' value='Search' className='search-button' />
        </form>
    )
};

export default SearchBar;