import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className={styles.sidebar} style={{ background: "gold", fontSize: "50px", gridArea:"sidebar" }}>
      <ul className={styles.items}>
        <Link to='./profile'><span className={styles.item}>Profile</span></Link>
        <Link to='./messages'><span className={styles.item}>Messages</span></Link>
        <Link to='./news'><span className={styles.item}>News</span></Link>
        <Link to='./music'><span className={styles.item}>Music</span></Link>
        <Link to='./settings'><span className={styles.item}>Settings</span></Link>
      </ul>
    </div>
  );
}

export default Sidebar