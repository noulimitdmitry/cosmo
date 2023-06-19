import styles from "./FormPost.module.css";

const FormPost = () => {
  return (
    <div className={styles.form}>
      <form action="#">
        <h>My posts</h>
        <div>
          <textarea name="comment" id="#" cols="30" rows="3"></textarea>
        </div>
        <div>
          <input type="text"></input>
        </div>
      </form>
    </div>
  );
};

export default FormPost;
