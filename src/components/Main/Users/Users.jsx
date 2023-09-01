import styles from "./Users.module.css";
import User from "./User/User";
import FormUser from "./FormUser/FormUser";

const Users = (props) => {
  let usersArr = props.users.map((item, index, arr) => (
    <User
      className={styles.user}
      userId={item.id}
      name={item.name}
      message={item.message}
      position={item.position}
      system={item.system}
      photoUrl={item.photoUrl}
      follow={item.follow}
      clickFollow={props.follow}
      clickUnfollow={props.unfollow}
    />
  ));
  return (
    <div className={styles.block}>
      {usersArr}
      <FormUser setUsers={props.setUsers} />
    </div>
  );
};

export default Users;
