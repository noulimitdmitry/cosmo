import styles from "./Users.module.css";
import User from "./User/User";

const Users = (props) => {
  let usersArr = props.users.map((item, index, arr) => (
    <User
      className={styles.user}
      name={item.name}
      message={item.message}
      position={item.position}
      system={item.system}
    />
  ));
  return <div>{usersArr}</div>;
};

export default Users;
