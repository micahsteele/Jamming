import React, {useState} from "react";


function SearchBar(props) {
    const [search, setSearch] = useState('');

    const handleTextChange = ({target}) => {
        setSearch(target.value);
    };

    const handleSubmit = (event) => {
        props.onSearch(event)
    }

    return (
        <div className='SeachBarForm'>
            <input aria-label='Type in a song' placeholder='Enter A Song' value={search} onChange={handleTextChange}/>
            <button className='search-button' onClick={handleSubmit}>Search</button>
        </div>
    )
};

export default SearchBar;