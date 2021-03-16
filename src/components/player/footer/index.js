import React, { useState } from 'react'
import s from './style.module.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'

function Footer() {
  const [value, setValue] = useState(30)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={s.footer}>
      <div className={s.footer__left}>
        <img
          className={s.footer__albumLogo}
          src='https://upload.wikimedia.org/wikipedia/commons/0/02/Limp_Bizkit.jpg'
          alt='limp bizkit'
        />
        <div className={s.footer__songInfo}>
          <h4>Limp Bizkit</h4>
          <p>Rolling</p>
        </div>
      </div>
      <div className={s.footer__center}>
        <ShuffleIcon className={s.footer__green} />
        <SkipPreviousIcon className={s.footer__icon} />
        <PlayCircleOutlineIcon fontSize='large' className={s.footer__icon} />
        <SkipNextIcon className={s.footer__icon} />
        <RepeatIcon className={s.footer__green} />
      </div>
      <div className={s.footer__right}>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider
              className={s.footer__slider}
              value={value}
              onChange={handleChange}
              aria-labelledby='continuous-slider'
            />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
