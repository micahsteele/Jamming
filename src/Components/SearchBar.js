import React, {useState} from "react";


function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleTextChange = ({target}) => {
        setSearchTerm(target.value);
    };

    const handleSubmit = () => {
        props.onSearch(searchTerm)
    }

    return (
        <div className='SeachBarForm'>
            <input aria-label='Type in a song' className='search-input' placeholder='Enter A Song, Artist, or Album' value={searchTerm} onChange={handleTextChange}/>
            <button className='search-button' onClick={handleSubmit}>Search</button>
        </div>
    )
};

export default SearchBar;