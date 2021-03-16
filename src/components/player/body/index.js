import s from './style.module.css'
import Header from './header'
import { useDataLayerValue } from '../../../DataLayer'

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
    </div>
  )
}

export default Body
