const client_id = '54cfbdf9bdc844ae86c3c2184c86d949';
const redirect_uri = 'http://localhost:3000';
let accessToken = '';

const Spotify = {
    getAccessToken() {
            if (accessToken) return accessToken;

            const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
            const expiryTime = window.location.href.match(/expires_in=([^&]*)/);
        
            if (tokenInURL && expiryTime) {
              accessToken = tokenInURL[1];
              const expiresIn = Number(expiryTime[1]);
              window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
              window.history.pushState('Access token', null, '/');
              return accessToken;
            }
        
            var url = 'https://accounts.spotify.com/authorize?response_type=token&scope=&state=';
            url += '&client_id=' + client_id;
            url += '&redirect_uri=' + redirect_uri;

            window.location = url;
    },

    search(term) {
        accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((response) => response.json())
            .then((jsonResponse) => {
            if (!jsonResponse) {
                console.error('Response error');
            }
            return jsonResponse.tracks.items.map((track) => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri,
            }));
            });
    },
}

export { Spotify };