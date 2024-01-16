import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.items}>
        <li className={styles.item}><Link to='/' className={styles.link}>Profile</Link></li>
        <li className={styles.item}><Link to='/messages' className={styles.link}>Messages</Link></li>
        <li className={styles.item}><Link to='/news' className={styles.link}>News</Link></li>
        <li className={styles.item}><Link to='/music' className={styles.link}>Music</Link></li>
        <li className={styles.item}><Link to='/settings' className={styles.link}>Settings</Link></li>
        <li className={styles.item}><Link to='/users' className={styles.link}>Users</Link></li>
      </nav>
    </div>
  );
}

export default Sidebar