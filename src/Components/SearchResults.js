import React, {useState} from "react";
import Track from "./Track";

function SearchResults() {
    const [tracks, setTracks] = useState([
        {
            name: 'test name',
            artist: 'test artist',
            album: 'test album', 
            id: 'test id',
        },
        {
            name: 'test2 name',
            artist: 'test2 artist',
            album: 'test2 album', 
            id: 'test2 id',
        }
      ]);
    
      const addTracks = (track) => {
        setTracks((tracks) => [track, ...tracks])
      }

    return (
        <div className='SearchResult' >
            <div className='results' >Results:</div>
            <ul>
            {tracks.map((track) => (
              <div className='tracks'><Track key={track.id} track={track} className='tracks' /><button className='track-button' >+</button></div>
            ))}
          </ul>
        </div>
    )
};

export default SearchResults;