import React from "react";
import Track from "./Track";

function Tracklist(props) {
    const { tracks } = props;

    return (
        <ul>
            {tracks.map((track) => (
            <div className='tracks'><Track key={track.id} track={track} className='tracks' />
            <button aria-label='add song to playlist' className='track-button' onClick={() => console.log('hello world')} >+</button></div>
            ))}
        </ul>
    )
};

export default Tracklist;