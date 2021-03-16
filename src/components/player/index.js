import Body from './body'
import Sidebar from './sidebar'
import Footer from './footer'
import s from './style.module.css'

function Player({ spotify }) {
  return (
    <div className={s.player}>
      <div className={s.player__body}>
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  )
}

export default Player
