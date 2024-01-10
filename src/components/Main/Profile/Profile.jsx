import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Person from "./Person/Person";
import FormPost from "./FormPost/FormPost";
import React from "react";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div>
        <Person profile={props.profile}/>
        <FormPost
          newPost={props.newPost}
          addPost={props.addPost}
          addChangesPost={props.addChangesPost}
        />
        <MyPosts posts={props.posts} />
      </div>
    </div>
  );
};

export default Profile;
