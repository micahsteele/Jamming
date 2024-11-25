import React, {useState} from "react";
import Tracklist from "./Tracklist";
import Track from "./Track";
import Playlist from "./Playlist";

function SearchResults(props) {
    const { tracks } = props
    
    //   const addTrackToPlaylist = (props) => {
    //     return setPlaylist((props) => [props, ...playlist]) 
    //   }

    return (
        <div className='SearchResult' >
            <div className='results' >Results:</div>
            <Tracklist tracks={tracks} />
        </div>
    )
};

export default SearchResults;