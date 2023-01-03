import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './components/Login/Login'
import Search from './components/Search/Search'


const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return code ? <Search code={code} /> : <Login />;
}

export default App;
