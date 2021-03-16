import './login.css'
import logo from '../../assets/Spotify_Logo_RGB_Green.png'
import { loginUrl } from '../../spotify'

function Login() {
  return (
    <div className='login'>
      <img src={logo} alt='spotify logo' />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login
