import styles from "./Users.module.css";
import User from "./User/User";
// import FormUser from "./FormUser/FormUser";
import axios from "axios";
import React from "react";

class Users extends React.Component {
  getUsers = () => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <div className={styles.block}>
        <div className={styles.block}>
          <button className={styles.button} onClick={this.getUsers}>
            SET USER
          </button>
        </div>
        {this.props.users.map((item, index, arr) => (
          <User
            className={styles.user}
            name={item.name}
            userId={item.id}
            uniqueUrlName={item.uniqueUrlName}
            photos={item.photos}
            status={item.status}
            followed={item.followed}
            clickFollow={this.props.follow}
            clickUnfollow={this.props.unfollow}
          />
        ))}
        {/* <FormUser /> */}
      </div>
    );
  }
}

export default Users;
