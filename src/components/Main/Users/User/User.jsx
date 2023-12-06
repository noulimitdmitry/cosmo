import styles from "./User.module.css";
import React from "react";

class User extends React.Component {
  clickFollow = (event) => {
    let userId = event.currentTarget.id;
    this.props.followed
      ? this.props.clickUnfollow(userId)
      : this.props.clickFollow(userId);
  };
  render() {
    return (
      <div className={styles.block}>
        <div className={styles.block__img}>
          <img src={this.props.photos.small} alt="avatar" />
          <button
            className={styles.follow}
            onClick={this.clickFollow}
            id={this.props.userId}
          >
            {this.props.followed ? "follow" : "unfollow"}
          </button>
        </div>
        <div className={styles.block__info}>
          <div className={styles.userName}>{this.props.name}</div>
          <div className={styles.userCountry}>{this.props.uniqueUrlName}</div>
          <div className={styles.userMessage}>{this.props.status}</div>
          <div className={styles.userCity}>{this.props.userId}</div>
        </div>
      </div>
    );
  }
}

export default User;
