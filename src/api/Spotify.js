import axios from "axios";

const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = '2353e1ccf7464652a66074ee88dc47b5';
const REDIRECT_URI = 'https://gilded-piroshki-e871fa.netlify.app/';
const SCOPES = ["user-read-playback-state","user-modify-playback-state", "playlist-read-private", "user-follow-modify", "playlist-read-collaborative", "user-follow-read", "user-read-currently-playing" ,"user-read-playback-position" ,"user-library-modify", "playlist-modify-private" ,"playlist-modify-public", "user-read-email","user-top-read", "streaming","user-read-recently-played", "user-read-private", "user-library-read"];

export const loginEndpoint = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join("%20")}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
    console.log(token)
};


export default apiClient;