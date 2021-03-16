import s from './style.module.css'

function SidebarOption({ title, Icon }) {
  return (
    <div className={s.sidebarOption}>
      {Icon && <Icon className={s.sidebarOption__icon} />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}

export default SidebarOption
