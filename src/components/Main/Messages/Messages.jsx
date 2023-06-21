import styles from "./Messages.module.css";
import Dialogs from './Dialogs/Dialogs'
import Friends from './Friends/Friends'

const Messages = (props) => {
  return (
    <div className={styles.messages}>
      <Friends friends={props.friends}/>
      <Dialogs/>
    </div>
  );
};

export default Messages;
