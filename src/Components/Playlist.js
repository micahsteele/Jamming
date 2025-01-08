import React from "react";
import Tracklist from "./Tracklist";


function Playlist(props) {
    const { playlistTracks, removeTrackFromPlaylist, savePlaylist, updatePlaylistName } = props;

    const handleTextChange = ({target}) => {
        updatePlaylistName(target.value);
        console.log(`update Playlist name: ${target.value}`)
    };

    return (
        <div className='Playlist' >
            <div className='form'>
                <input aria-label='Enter playlist name here' placeholder='Name of Playlist' className='playlist-name' onChange={handleTextChange} />
                <div className='playlist'>
                    <Tracklist tracks={playlistTracks} removeTrackFromPlaylist={removeTrackFromPlaylist} remove={true} add={false} />
                </div>
                <button onClick={savePlaylist}>Save to Spotify</button>
            </div>
        </div>
    )
};

export default Playlist;