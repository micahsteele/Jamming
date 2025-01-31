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

    async search(term) {
        accessToken = Spotify.getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        const jsonResponse = await response.json();
        if (!jsonResponse) {
            console.error('Response error');
        }
        return jsonResponse.tracks.items.map((t) => ({
            id: t.id,
            name: t.name,
            artist: t.artists[0].name,
            album: t.album.name,
            uri: t.uri,
        }));
    },

    savePlaylist(name, trackUris) {
        if (!name || !trackUris) return;
        const aToken = Spotify.getAccessToken();
        const header = { Authorization: `Bearer ${aToken}` };
        let userId;
        return fetch(`https://api.spotify.com/v1/me`, { headers: header })
          .then((response) => response.json())
          .then((jsonResponse) => {
            userId = jsonResponse.id;
            let playlistId;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
              headers: header,
              method: "post",
              body: JSON.stringify({ name: name }),
            })
              .then((response) => response.json())
              .then((jsonResponse) => {
                playlistId = jsonResponse.id;
                return fetch(
                  `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                  {
                    headers: header,
                    method: "post",
                    body: JSON.stringify({ uris: trackUris }),
                  }
                );
              });
          });
    },
};
export { Spotify };