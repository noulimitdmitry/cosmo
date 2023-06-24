import styles from "./Dialogs.module.css";
import { createRef } from "react";

const Dialogs = (props) => {
  
  let arr = props.dialogs;
  let arrMessages = arr.map((item, index, arr) => (
    <li className={styles.item}>{arr[index]}</li>
  ));

  let newRef = createRef();
  let activeAddMessage = (event) => {
    props.addMessage()
  } 

  let activeAddChanges = () => {
    let text = newRef.current.value
    props.addChangesMessage(text)
  }

  return (
    <div className={styles.dialogs}>
      <h2 className={`${styles.title} ${styles.titleDialogs}`}> Gialogs</h2>
      <div className={styles.items}>{arrMessages}</div>
      <div className={styles.send}>
        <textarea onChange={activeAddChanges} ref={newRef} className={styles.textarea} value={props.newMessage} name="" id="" rows="1"></textarea>
        <button onClick={activeAddMessage}>send</button>
      </div>
    </div>
  );
};

export default Dialogs;
