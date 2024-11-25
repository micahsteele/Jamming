import React, {useState} from "react";
import App from "../App";

function Track(props) {
    const { track, addTrackToPlaylist } = props;

    const handleAdd = () => {
        addTrackToPlaylist(track)
    };

    return (
        <li>
            <p>Name: {track.name}</p>
            <p>{track.artist} | {track.album}</p>
            <button aria-label='add song to playlist' className='track-button' onClick={handleAdd} >+</button>
        </li>
    )
};

export default Track;