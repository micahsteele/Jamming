import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import React, {useState} from 'react';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import Playlist from './Components/Playlist';
import Tracklist from './Components/Tracklist';
import Track from './Components/Track';

function App() {
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
  const [playlistTracks, setPlaylistTracks] = useState([
    {
        name: 'test 3 name',
        artist: 'test 3 artist',
        album: 'test 3 album', 
        id: 'test 3 id',
    },
    {
        name: 'test 4 name',
        artist: 'test 4 artist',
        album: 'test 4 album', 
        id: 'test 4 id',
    }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Create a Spotify Playlist 
        </h1>
      </header>
      <main>
        <SearchBar />
        <div className='Main-body'>
          <SearchResults tracks={tracks} />
          <Playlist playlistTracks={playlistTracks} />
        </div>
      </main>
    </div>
  );
};

export default App;
