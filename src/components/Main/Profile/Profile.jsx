import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Person from "./Person/Person";
import FormPost from "./FormPost/FormPost";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div>
        <Person />
        <FormPost newPost={props.newPost} addPost={props.addPost} addChangePostText={props.addChangePostText}/>
        <MyPosts posts={props.posts} />
      </div>
    </div>
  );
};

export default Profile;
