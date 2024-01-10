import styles from "./Person.module.css";

const Person = (props) => {
  if (!props.profile) {
    return <h1>Take your Time</h1>;
  } else
    return (
      <div className={styles.person}>
        <div>
          <p>ava + description</p>
        </div>
        <div>{props.profile.aboutMe}</div>
        <div>
          <h1>Contacts:</h1>
          <div>{props.profile.contacts.website}</div>
          <div>{props.profile.contacts.vk}</div>
          <div>{props.profile.contacts.twitter}</div>
          <div>{props.profile.contacts.instagram}</div>
          <div>{props.profile.contacts.youtube}</div>
          <div>{props.profile.contacts.github}</div>
          <div>{props.profile.contacts.mainLink}</div>
          <ul></ul>
          <p>{props.profile.lookingForAJob}</p>
          <p>{props.profile.lookingForAJobDescription}</p>
          <p>{props.profile.fullName}</p>
          <p>{props.profile.userId}</p>
          <p>{props.profile.photos.small}</p>
          <p>{props.profile.aboutMe.large}</p>
        </div>
      </div>
    );
};

export default Person;
