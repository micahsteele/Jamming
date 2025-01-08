import './App.css';
import React, {useState} from 'react';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import Playlist from './Components/Playlist';
import {Spotify} from './Spotify';


function App() {
  const [tracks, setTracks] = useState([{}]);
  const [playlistName, setPlaylistName] = useState('Playlist Name');
  const [playlistTracks, setPlaylistTracks] = useState([{}]);

  const addTrackToPlaylist = (trackIdToAdd) => {
    if(playlistTracks.find((playlistTrack) => playlistTrack.id === trackIdToAdd.id)){
      console.log(trackIdToAdd)
    } else {
    setPlaylistTracks((playlistTracks) => [trackIdToAdd, ...playlistTracks])
    }
  };

  const removeTrackFromPlaylist = (trackIdToRemove) => {
    setPlaylistTracks((playlistTracks) => 
      playlistTracks.filter((playlistTrack) => playlistTrack.id !== trackIdToRemove))
  };

  function updatePlaylistName(name) {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map((t) => t.uri);
    console.log(`trackUris in appjs: ${trackUris}`);
    console.log(`playlistName in appjs: ${playlistName}`);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      updatePlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  };

  function search(term) {
    Spotify.search(term).then((result) => setTracks(result));
    console.log(term)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Create a Spotify Playlist 
        </h1>
      </header>
      <main>
        <SearchBar onSearch={search}/>
        <div className='Main-body'>
          <SearchResults tracks={tracks} addTrackToPlaylist={addTrackToPlaylist} />
          <Playlist playlistTracks={playlistTracks} playlistName={playlistName} updatePlaylistName={updatePlaylistName} removeTrackFromPlaylist={removeTrackFromPlaylist} savePlaylist={savePlaylist}  />
        </div>
      </main>
    </div>
  );
};

export default App;
