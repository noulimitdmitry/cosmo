import styles from "./FormUser.module.css";

const FormUser = (props) => {
  let addUser = () => {
    props.addUser();
  };
  let addChangesName = (event) => {
    let name = event.target.value;
    props.addChangesName(name);
  };
  let addChangesMessage = (event) => {
    let message = event.target.value;
    props.addChangesMessage(message);
  };
  let addChangesPosition = (event) => {
    let position = event.target.value;
    props.addChangesPosition(position);
  };
  let addChangesSystem = (event) => {
    let system = event.target.value;
    props.addChangesSystem(system);
  };
  return (
    <div className={styles.block}>
      <div>
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="name"
            value={props.newName}
            onChange={addChangesName}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Message:</span>
          <input
            type="text"
            name="message"
            value={props.newMessage}
            onChange={addChangesMessage}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Position:</span>
          <input
            type="text"
            name="position"
            value={props.newPosition}
            onChange={addChangesPosition}
          />
        </label>
      </div>
      <div>
        <label>
          <span>System:</span>
          <input
            type="text"
            name="system"
            value={props.newSystem}
            onChange={addChangesSystem}
          />
        </label>
      </div>
      <button className={styles.button} onClick={addUser}>
        Add User
      </button>
    </div>
  );
};

export default FormUser;
