import styles from "./FormPost.module.css";
import { createRef } from "react";

const FormPost = (props) => {
  let newRef = createRef();
  let truns = (event) => {
    props.addPost(newRef.current.value);
    newRef.current.value = '';
    event.preventDefault();
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
            ref={newRef}
          ></textarea>
        </div>
        <div>
          <input
            className={styles.submit}
            type="submit"
            onClick={truns}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default FormPost;
