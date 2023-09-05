import styles from "./User.module.css";

const User = (props) => {
  let clickFollow = (event) => {
    let userId = event.currentTarget.id;
    props.followed ? props.clickUnfollow(userId) : props.clickFollow(userId);
  };
  return (
    <div className={styles.block}>
      <div className={styles.block__img}>
        <img src={props.photos.small} alt="avatar" />
        <button
          className={styles.follow}
          onClick={clickFollow}
          id={props.userId}
        >
          {props.followed ? "follow" : "unfollow"}
        </button>
      </div>
      <div className={styles.block__info}>
        <div className={styles.userName}>{props.name}</div>
        <div className={styles.userCountry}>{props.uniqueUrlName}</div>
        <div className={styles.userMessage}>{props.status}</div>
        <div className={styles.userCity}>{props.userId}</div>
      </div>
    </div>
  );
};

export default User;
