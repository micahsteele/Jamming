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

    const determineButtonAction = () => {
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

    const determineButtonSign = () => {
        if(remove) {
            return '-'
        } else if(add) {
            return '+'
        } else {
            console.log('not working')
        }
    }

    return (
        <li className='track' >
            <div>
                <p className='track-name' >Name: {track.name}</p>
                <p>{track.artist} | {track.album}</p>
            </div>
            <div className='track-button-div'>
                <button aria-label='add song to playlist' className='track-button' onClick={determineButtonAction} >{determineButtonSign()}</button>
            </div>
        </li>
    )
};

export default Track;