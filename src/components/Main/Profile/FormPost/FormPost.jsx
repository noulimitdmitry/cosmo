import styles from "./FormPost.module.css";

const FormPost = (props) => {
  let activeAddPost = (event) => {
    props.addPost();
    event.preventDefault();
  };

  let activeAddChangePostText = (event) => {
    let text = event.target.value;
    props.addChangePostText(text);
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>My posts</h2>
      <form action="#">
        <div>
          <textarea
            className={styles.textArea}
            name="comment"
            id="#"
            cols="30"
            rows="3"
            value={props.newPost}
            onChange={activeAddChangePostText}
          ></textarea>
        </div>
        <div>
          <input
            className={styles.submit}
            type="submit"
            onClick={activeAddPost}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default FormPost;
