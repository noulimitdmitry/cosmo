import styles from "./Users.module.css";
import User from "./User/User";
import FormUser from "./FormUser/FormUser";
import axios from "axios";
const newUsers = [
  {
    id: 1,
    follow: true,
    photoUrl:
      "https://dovidka.biz.ua/wp-content/uploads/2020/01/%D0%BC%D0%B0%D1%80%D1%81-%D0%B4%D1%96%D1%82%D1%8F%D0%BC.jpg",
    name: "Mars",
    message: "i am red",
    position: 4,
    system: "sun",
  },
];

const Users = (props) => {
  // if (props.users.length === 0) ;
  axios
    .get("https://social-network.samuraijs.com/api/1.0/users")
    .then((response) => {
      props.setUsers(response.data.items);
    });
  let usersArr = props.users.map((item, index, arr) => (
    <User
      className={styles.user}
      userId={item.id}
      name={item.name}
      uniqueUrlName={item.uniqueUrlName}
      photos={item.photos}
      status={item.status}
      followed={item.followed}
      clickFollow={props.follow}
      clickUnfollow={props.unfollow}
    />
  ));

  return (
    <div className={styles.block}>
      {usersArr}
      <FormUser />
    </div>
  );
};

export default Users;
