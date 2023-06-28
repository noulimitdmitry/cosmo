import styles from "./Messages.module.css";
import Dialogs from "./Dialogs/Dialogs";
import Friends from "./Friends/Friends";

const Messages = (props) => {
  return (
    <div className={styles.messages}>
      <Friends friends={props.messages.friends} />
      <Dialogs
        dialogs={props.messages.dialogs}
        newMessage={props.newMessage}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Messages;
