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
          <SearchResults />
          <Playlist />
        </div>
      </main>
    </div>
  );
};

export default App;
