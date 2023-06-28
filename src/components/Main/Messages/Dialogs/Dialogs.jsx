import styles from "./Dialogs.module.css";
import { createRef } from "react";
import { actionCreatorAddMessage } from "../../../../redux/reducerMessagesPage";
import { actionCreatorAddChangesMessage } from "../../../../redux/reducerMessagesPage";

const Dialogs = (props) => {
  let arr = props.dialogs;
  let arrMessages = arr.map((item, index, arr) => (
    <li className={styles.item}>{arr[index]}</li>
  ));

  let newRef = createRef();

  let AddMessage = () => {
    props.dispatch(actionCreatorAddMessage());
    newRef.current.value = "";
  };
  let AddChangesMessage = () => {
    let text = newRef.current.value;
    props.dispatch(actionCreatorAddChangesMessage(text));
  };

  return (
    <div className={styles.dialogs}>
      <h2 className={`${styles.title} ${styles.titleDialogs}`}> Gialogs</h2>
      <div className={styles.items}>{arrMessages}</div>
      <div className={styles.send}>
        <textarea
          onChange={AddChangesMessage}
          ref={newRef}
          className={styles.textarea}
          value={props.newMessage}
          name=""
          id=""
          rows="1"
        ></textarea>
        <button onClick={AddMessage}>send</button>
      </div>
    </div>
  );
};

export default Dialogs;
