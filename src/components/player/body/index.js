import s from './style.module.css'
import Header from './header'
import SongRow from './songrow'
import { useDataLayerValue } from '../../../DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue()

  return (
    <div className={s.body}>
      <Header spotify={spotify} />

      <div className={s.body__info}>
        <img
          className={s.body__img}
          src={discover_weekly?.images[0].url}
          alt={discover_weekly?.images[0].url}
        />
        <div className={s.body__infoText}>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className={s.body__song}>
        <div className={s.body__icons}>
          <PlayCircleFilledIcon className={s.body__shuffle} />
          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body
