import React, {useState} from "react";

function Track() {
    const [track, setTrack] = useState([
        {
            name: 'test',
            artist: 'test',
            album: 'test', 
            id: 'test',
        },
        {
            name: 'test2',
            artist: 'test2',
            album: 'test2', 
            id: 'test2',
        }
     ])
};

export default Track;