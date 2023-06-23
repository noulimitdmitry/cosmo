import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let arr = props.posts;
  const arrPosts = arr.map((item, index, arr) => (
    <Post post={props.posts[index].text} likes={props.posts[index].likes}/>
  )) 

  return (
    <div className={styles.myPosts}>
      <p className={styles.title}> New posts </p>
      {arrPosts}
    </div>
  );
}

export default MyPosts