import React from "react";
import Track from "./Track";

function Tracklist(props) {
    const { tracks, addTrackToPlaylist, removeTrackFromPlaylist, remove, add } = props;

    return (
        <ul>
            {tracks.map((track) => (
            <div className='tracks'>
                <Track key={track.id} track={track} className='tracks' addTrackToPlaylist={addTrackToPlaylist} 
                removeTrackFromPlaylist={removeTrackFromPlaylist} remove={remove} add={add} />
            </div>
            ))}
        </ul>
    )
};

export default Tracklist;