import { Container } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=2353e1ccf7464652a66074ee88dc47b5&response_type=code&redirect_uri=http://localhost:3000/&scope=user-read-playback-state%20user-modify-playback-state%20playlist-read-private%20user-follow-modify%20playlist-read-collaborative%20user-follow-read%20user-read-currently-playing%20user-read-playback-position%20user-library-modify%20playlist-modify-private%20playlist-modify-public%20user-read-email%20user-top-read%20streaming%20user-read-recently-played%20user-read-private%20user-library-read";

function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Connect Spotify
      </a>
    </Container>
  );
}

export default Login;
