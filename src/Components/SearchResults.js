import React, {useState} from "react";
import Tracklist from "./Tracklist";
import Track from "./Track";
import Playlist from "./Playlist";

function SearchResults(props) {
    const { tracks, addTrackToPlaylist } = props
    
    //   const addTrackToPlaylist = (props) => {
    //     return setPlaylist((props) => [props, ...playlist]) 
    //   }

    return (
        <div className='SearchResult' >
            <div className='results' >Results:</div>
            <Tracklist tracks={tracks} addTrackToPlaylist={addTrackToPlaylist} />
        </div>
    )
};

export default SearchResults;