import React, {useState} from "react";
import Tracklist from "./Tracklist";
import Track from "./Track";
import Playlist from "./Playlist";

function SearchResults(props) {
    const { tracks, addTrackToPlaylist } = props

    return (
        <div className='SearchResult' >
            <div className='results' >Results:</div>
            <div className='searchResults'>
                <Tracklist tracks={tracks} addTrackToPlaylist={addTrackToPlaylist} remove={false} add={true} />
            </div>
        </div>
    )
};

export default SearchResults;