import styles from "./Users.module.css";
import User from "./User/User";
import FormUser from "./FormUser/FormUser";

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
  return (
    <div className={styles.block}>
      {usersArr}
      <FormUser
        newName={props.newName}
        newMessage={props.newMessage}
        newPosition={props.newPosition}
        newSystem={props.newSystem}
        addUser={props.addUser}
        addChangesName={props.addChangesName}
        addChangesMessage={props.addChangesMessage}
        addChangesPosition={props.addChangesPosition}
        addChangesSystem={props.addChangesSystem}
      />
    </div>
  );
};

export default Users;
