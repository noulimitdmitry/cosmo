import styles from "./Friends.module.css";
import {NavLink} from 'react-router-dom'

let itemStyle = styles.item + " " + styles.itemF

const Friends = (props) => {
  return (
    <div className={styles.friends}>
      <h2 className={`${styles.title} ${styles.titleFriends}`}>Friends</h2>
      <NavLink to='/messages/1' className={itemStyle}>{props.friends[0].name}</NavLink>
      <NavLink to='/messages/2' className={itemStyle}>{props.friends[1].name}</NavLink>
      <NavLink to='/messages/3' className={itemStyle}>{props.friends[2].name}</NavLink>
      <NavLink to='/messages/4' className={itemStyle}>{props.friends[3].name}</NavLink>
      <NavLink to='/messages/5' className={itemStyle}>{props.friends[4].name}</NavLink>
      <NavLink to='/messages/6' className={itemStyle}>{props.friends[5].name}</NavLink>
      <NavLink to='/messages/7' className={itemStyle}>{props.friends[6].name}</NavLink>
    </div>
  );
};

export default Friends;
