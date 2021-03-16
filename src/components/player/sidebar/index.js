import SidebarOption from '../sidebarOption'
import s from './style.module.css'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from '../../../DataLayer'

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue()

  return (
    <div className={s.sidebar}>
      <img
        className={s.sidebar__logo}
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='logo spotify'
      />
      <SidebarOption Icon={HomeIcon} title='Home' />
      <SidebarOption Icon={SearchIcon} title='Search' />
      <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />

      <br />
      <strong className={s.sidebar__title}>PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlists) => (
        <SidebarOption title={playlists.name} />
      ))}
    </div>
  )
}

export default Sidebar
