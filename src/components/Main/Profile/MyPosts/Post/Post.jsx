import styles from './Post.module.css'

const Post = (props) => {
  return (
    <div className={styles.post}>
      <img className={styles.avatar_mini} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHHuprbuFLkExsCT4zGBObVKM6ftzVp_vQ3JalSw03rw&s" alt="jupiter"/> 
      <p className={styles.post__item}> {props.post} </p>
      <span className={styles.likes}>Likes {props.likes}</span>
    </div>
  );
}

export default Post