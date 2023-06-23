import styles from "./Friends.module.css";
import Friend from "./Friend/Friend" 

const Friends = (props) => {

  let arr = props.friends;

  let navLinkArr = arr.map((item, index, arr) => (
    <Friend to={arr[index].id} friend={arr[index].name}/>
  ))

  return (
    <div className={styles.friends}>
      <h2 className={styles.title}>Friends</h2>
      {navLinkArr}
    </div>
  );
};

export default Friends;
