import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
  let arr = props.dialogs;
  let arrMessages = arr.map((item, index, arr) => (
    <li className={styles.item}>{arr[index]}</li>
  ));

  return (
    <div className={styles.dialogs}>
      <h2 className={`${styles.title} ${styles.titleDialogs}`}> Gialogs</h2>
      {arrMessages}
    </div>
  );
};

export default Dialogs;
