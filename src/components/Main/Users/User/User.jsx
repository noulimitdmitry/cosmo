import styles from "./User.module.css";

const User = (props) => {
  let clickFollow = (event) => {
    let userId = event.currentTarget.id
    props.follow ? props.clickUnfollow(userId) : props.clickFollow(userId);
  };
  return (
    <div className={styles.block}>
      <div className={styles.block__img}>
        <img src={props.photoUrl} alt="avatar" />
        <button className={styles.follow} onClick={clickFollow} id={props.userId}>
          {props.follow ? "follow" : "unfollow"}
        </button>
      </div>
      <div className={styles.block__info}>
        <div className={styles.userName}>{props.name}</div>
        <div className={styles.userCountry}>{props.position}</div>
        <div className={styles.userMessage}>{props.message}</div>
        <div className={styles.userCity}>{props.system}</div>
      </div>
    </div>
  );
};

export default User;
