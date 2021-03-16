import s from './style.module.css'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from '../../../../DataLayer'

function Header() {
  const [{ user }, dispatch] = useDataLayerValue()

  return (
    <div className={s.header}>
      <div className={s.header__left}>
        <SearchIcon />
        <input
          type='text'
          placeholder='Search for Artists, Songs or Products '
        />
      </div>
      <div className={s.header__right}>
        <Avatar src={user?.images[0]?.url} alt={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
