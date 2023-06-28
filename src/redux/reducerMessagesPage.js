const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_CHANGES_MESSAGE = "ADD-CHANGES-MESSAGE";

export const actionCreatorAddMessage = () => ({ type: ADD_MESSAGE });
export const actionCreatorAddChangesMessage = (text) => ({
  type: ADD_CHANGES_MESSAGE,
  text: text,
});


let reducerMessagesPage = (action, reducer, callSubscriber) => {
  if (action.type == ADD_MESSAGE) {
    let message = reducer.newMessage
    reducer.dialogs.push(message)
    callSubscriber()
  } else if (action.type == ADD_CHANGES_MESSAGE) {
    reducer.newMessage = action.text;
    callSubscriber()
  }
}

export default reducerMessagesPage
