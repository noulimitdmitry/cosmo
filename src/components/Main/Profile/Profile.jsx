import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Person from "./Person/Person";
import FormPost from "./FormPost/FormPost";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div>
        <Person />
        <FormPost
          addChanges={props.addChanges}
          dispatch={props.dispatch}
        />
        <MyPosts posts={props.posts.posts} />
      </div>
    </div>
  );
};

export default Profile;
