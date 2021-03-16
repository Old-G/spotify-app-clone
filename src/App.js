import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './components/login'
import Player from './components/player'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi()

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlists: playlists,
        })
      })

      spotify
        .getPlaylist('7b8ec9bd9b8543958cd8aa2b338c497f')
        .then((response) => {
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly: response,
          })
        })
    }
  }, [])

  return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  )
}

export default App
