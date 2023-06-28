import styles from "./FormPost.module.css";
import { createRef } from "react";

const FormPost = (props) => {
  let newRef = createRef();
  let activeAddPost = (event) => {
    props.dispatch({type:"ADD-POST"});
    newRef.current.value = "";
    event.preventDefault();
  };

  let activeAddChangesText = (event) => {
    let text = newRef.current.value;
    props.dispatch({type:"ADD-CHANGES-TEXT", text:text});
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
            value={props.newPost}
            onChange={activeAddChangesText}
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
