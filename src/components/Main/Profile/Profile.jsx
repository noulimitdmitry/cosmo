import styles from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import Person from './Person/Person';
import FormPost from './FormPost/FormPost';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div>
        <Person/>
        <FormPost/>
        <MyPosts/>
      </div>
    </div>
  );
}

export default Profile