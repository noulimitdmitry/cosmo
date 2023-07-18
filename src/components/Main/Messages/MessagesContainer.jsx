import Messages from "./Messages";
import { actionCreatorAddMessage } from "../../../redux/reducerMessagesPage";
import { actionCreatorAddChangesMessage } from "../../../redux/reducerMessagesPage";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    friends: state.messagesPage.friends,
    dialogs: state.messagesPage.dialogs,
    newMessage: state.messagesPage.newMessage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(actionCreatorAddMessage());
    },
    addChangesMessage: (text) => {
      dispatch(actionCreatorAddChangesMessage(text));
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
