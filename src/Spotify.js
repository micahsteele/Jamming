const client_id = '54cfbdf9bdc844ae86c3c2184c86d949';
const redirect_uri = 'http://localhost:3000';
let accessToken = '';

const Spotify = {
    getAccessToken() {
        var stateKey = 'spotify_auth_state';

        function getHashParams() {
            var hashParams = {};
            var e, r = /([^&;=]+)=?([^&;]*)/g,
                q = window.location.hash.substring(1);
            while ( e = r.exec(q)) {
                hashParams[e[1]] = decodeURIComponent(e[2]);
            }
            return hashParams;
        }

        function generateRandomString(length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
        };

        var userProfileSource = document.getElementById('user-profile-template').innerHTML,
            userProfileTemplate = Handlebars.compile(userProfileSource),
            userProfilePlaceholder = document.getElementById('user-profile');

            oauthSource = document.getElementById('oauth-template').innerHTML,
            oauthTemplate = Handlebars.compile(oauthSource),
            oauthPlaceholder = document.getElementById('oauth');

        var params = getHashParams();

        var access_token = params.access_token,
            state = params.state,
            storedState = localStorage.getItem(stateKey);

            if (access_token && (state == null || state !== storedState)) {
            alert('There was an error during the authentication');
            } else {
            localStorage.removeItem(stateKey);
            if (access_token) {
                $.ajax({
                    url: 'https://api.spotify.com/v1/me',
                    headers: {
                    'Authorization': 'Bearer ' + access_token
                    },
                    success: function(response) {
                    userProfilePlaceholder.innerHTML = userProfileTemplate(response);

                    $('#login').hide();
                    $('#loggedin').show();
                    }
                });
            } else {
                $('#login').show();
                $('#loggedin').hide();
            }

            document.getElementById('login-button').addEventListener('click', function() {

                var state = generateRandomString(16);

                localStorage.setItem(stateKey, state);
                var scope = 'user-read-private user-read-email';

                var url = 'https://accounts.spotify.com/authorize';
                url += '?response_type=token';
                url += '&client_id=' + encodeURIComponent(client_id);
                url += '&scope=' + encodeURIComponent(scope);
                url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
                url += '&state=' + encodeURIComponent(state);

                window.location = url;
            }, false);
        }
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