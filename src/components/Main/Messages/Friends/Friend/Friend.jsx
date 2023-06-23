import styles from "./Friend.module.css";
import {NavLink} from 'react-router-dom'

const Friends = (props) => {
  return (
      <NavLink to={`/messages/${props.to}`} className={styles.item}>{props.friend}</NavLink>
  );
};

export default Friends;
