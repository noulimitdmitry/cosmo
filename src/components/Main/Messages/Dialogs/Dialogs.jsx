import styles from "./Dialogs.module.css";
import { actionCreatorAddMessage } from "../../../../redux/reducerMessagesPage";
import { actionCreatorAddChangesMessage } from "../../../../redux/reducerMessagesPage";

const Dialogs = (props) => {
  let arr = props.dialogs;
  let arrMessages = arr.map((item, index, arr) => (
    <li className={styles.item}>{arr[index]}</li>
  ));

  let activeAddMessage = () => {
    props.addMessage();
  };
  let activeAddChangesMessage = (event) => {
    let text = event.target.value;
    props.addChangesMessage(text);
  };

  return (
    <div className={styles.dialogs}>
      <h2 className={`${styles.title} ${styles.titleDialogs}`}> Gialogs</h2>
      <div className={styles.items}>{arrMessages}</div>
      <div className={styles.send}>
        <textarea
          onChange={activeAddChangesMessage}
          className={styles.textarea}
          value={props.newMessage}
          name=""
          id=""
          rows="1"
        ></textarea>
        <button onClick={activeAddMessage}>send</button>
      </div>
    </div>
  );
};

export default Dialogs;
