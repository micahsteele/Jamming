import React, {useState} from "react";
import App from "../App";

function Track(props) {
    const { track } = props;

    return (
        <li>
            <p>Name: {track.name}</p>
            <p>{track.artist} | {track.album}</p>
        </li>
    )
};

export default Track;