import React, { useState } from "react";
import Tracklist from "./Tracklist";


function Playlist(props) {
    const [playlistName, setPlaylistName] = useState('')
    const { playlistTracks } = props;

    const handleTextChange = ({target}) => {
        setPlaylistName(target.value);
    };

    return (
        <div className='Playlist' >
            <form className='form' >
                <input aria-label='Enter playlist name heres' placeholder='Name of Playlist' className='playlist-name' value={playlistName} 
                onChange={handleTextChange} />
                <div>
                    <Tracklist tracks={playlistTracks} />
                </div>
                <input type='submit' value='Save to Spotify' />
            </form>
        </div>
    )
};

export default Playlist;