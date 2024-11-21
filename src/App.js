import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import Playlist from './Components/Playlist';
import Tracklist from './Components/Tracklist';
import Track from './Components/Track';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Create a Spotify Playlist 
        </p>
      </header>
      <main>
        <SearchBar />
        <div className='Main-body'>
          <SearchResults />
          <Track />
          <Playlist />
        </div>
      </main>
    </div>
  );
};

export default App;
