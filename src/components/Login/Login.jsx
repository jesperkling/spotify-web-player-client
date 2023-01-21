import { loginEndpoint } from "../../api/Spotify";
import Logo from "../../assets/images/spotify-color-svgrepo-com.svg";

function Login() {
  return (
    <div className="grid h-screen place-items-center">
      <img src={Logo} alt="" className="h-auto w-40" />
      <h3>Spotify Clone by Jesper Kling</h3>
      <a
        className="text-white no-underline bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        href={loginEndpoint}
      >
        Login to Spotify
      </a>
    </div>
  );
}

export default Login;
