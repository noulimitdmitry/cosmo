import styles from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.items}>
        <li className={styles.item}><NavLink to='/' activeClassName={styles.activeLink}>Profile</NavLink></li>
        <li className={styles.item}><NavLink to='/messages' activeClassName={styles.activeLink}>Messages</NavLink></li>
        <li className={styles.item}><NavLink to='/news' activeClassName={styles.activeLink}>News</NavLink></li>
        <li className={styles.item}><NavLink to='/music' activeClassName={styles.activeLink}>Music</NavLink></li>
        <li className={styles.item}><NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink></li>
      </nav>
    </div>
  );
}

export default Sidebar