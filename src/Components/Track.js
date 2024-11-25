import React, {useState} from "react";
import App from "../App";

function Track(props) {
    const { track, addTrackToPlaylist, removeTrackFromPlaylist, remove, add } = props;

    const handleAdd = () => {
        addTrackToPlaylist(track);
    };

    const handleRemove = () => {
        removeTrackFromPlaylist(track.id);
    };

    const determineButton = () => {
        if(remove) {
            console.log(document.getElementsByClassName('playlist'))
            return handleRemove();
        } else if(add) {
            console.log(document.getElementsByClassName('searchResults'))
            return handleAdd();
        } else {
            return console.log('not working');
        }
    };

    return (
        <li className='track' >
            <div>
                <p>Name: {track.name}</p>
                <p>{track.artist} | {track.album}</p>
            </div>
            <button aria-label='add song to playlist' className='track-button' onClick={determineButton} >+</button>
        </li>
    )
};

export default Track;