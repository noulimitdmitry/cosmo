import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.items}>
        <li className={styles.item}><Link to='/' activeClassName={styles.activeLink}>Profile</Link></li>
        <li className={styles.item}><Link to='/messages' activeClassName={styles.activeLink}>Messages</Link></li>
        <li className={styles.item}><Link to='/news' activeClassName={styles.activeLink}>News</Link></li>
        <li className={styles.item}><Link to='/music' activeClassName={styles.activeLink}>Music</Link></li>
        <li className={styles.item}><Link to='/settings' activeClassName={styles.activeLink}>Settings</Link></li>
      </nav>
    </div>
  );
}

export default Sidebar