import axios from "axios";

const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = '2353e1ccf7464652a66074ee88dc47b5';
const REDIRECT_URI = 'https://gilded-piroshki-e871fa.netlify.app/';
const SCOPES = ["user-read-playback-state","user-modify-playback-state", "playlist-read-private", "user-follow-modify", "playlist-read-collaborative", "user-follow-read", "user-read-currently-playing" ,"user-read-playback-position" ,"user-library-modify", "playlist-modify-private" ,"playlist-modify-public", "user-read-email","user-top-read", "streaming","user-read-recently-played", "user-read-private", "user-library-read"];

export const loginEndpoint = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join("%20")}&response_type=token&show_dialog=true`;

// response:
// http://localhost:3000/#access_token=BQDIYdGTYnrCFNbw6b_IRKASfoId_zDRj8f70WxMpXDKU7m4d5vfrGaNIiDSmet_MEi6-4n8lCxhXR79_l-Sf2CMIyQONWGnwxcum9mlGUdadZJ4uliW17FqOUvwXgnP96MBILvlKKVXfIkQ3jmaGBDV-o1xnhUI17ZDDxpFzCmyycAI_lNESBRM2KtKxwtpG1hzZhDSAKqsEcrLE4Q4kLQMFQzpcCPuWhK3CP8PBzz27MwGb_7UVUaGerU8HLLBt56fPghEWJoIuS5a5TMGc39uvGLUYsNwKByg7rRlQZqnd6ptP7wmaC5SWd3w0qgVfhnBMY3UCTlP&token_type=Bearer&expires_in=3600

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
};

export default apiClient;