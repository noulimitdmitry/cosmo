import styles from './MyPosts.module.css'
import Post from './Post/Post'

let messages = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5','Post 6'];

const MyPosts = (props) => {
  return (
    <div className={styles.myPosts}>
      <p> New posts </p>
      <Post messages={messages[0]}/>
      <Post messages={messages[1]}/>
      <Post messages={messages[2]}/>
      <Post messages={messages[3]}/>
      <Post messages={messages[4]}/>
    </div>
  );
}

export default MyPosts