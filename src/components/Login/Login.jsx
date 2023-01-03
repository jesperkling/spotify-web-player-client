const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=2353e1ccf7464652a66074ee88dc47b5&response_type=code&redirect_uri=http://localhost:3000/&scope=user-read-playback-state%20user-modify-playback-state%20playlist-read-private%20user-follow-modify%20playlist-read-collaborative%20user-follow-read%20user-read-currently-playing%20user-read-playback-position%20user-library-modify%20playlist-modify-private%20playlist-modify-public%20user-read-email%20user-top-read%20streaming%20user-read-recently-played%20user-read-private%20user-library-read";

function Login() {
  return (
    <div className="grid h-screen place-items-center">
      <a
        className="text-white no-underline bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        href={AUTH_URL}
      >
        Connect Spotify
      </a>
    </div>
  );
}

export default Login;
