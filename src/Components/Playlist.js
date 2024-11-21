

function Playlist() {
    return (
        <div className='Playlist' >
            <form>
                <input placeholder='Name of Playlist' className='playlist-name' />
                <div>
                </div>
                <input type='submit' value='Save to Spotify' />
            </form>
        </div>
    )
};

export default Playlist;