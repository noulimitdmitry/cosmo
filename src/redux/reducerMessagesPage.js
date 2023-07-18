const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_CHANGES_MESSAGE = "ADD-CHANGES-MESSAGE";

export const actionCreatorAddMessage = () => ({ type: ADD_MESSAGE });
export const actionCreatorAddChangesMessage = (text) => ({
  type: ADD_CHANGES_MESSAGE,
  text: text,
});

let initialState = {
  friends: [
    { name: "Mercury", id: 1 },
    { name: "Venus", id: 2 },
    { name: "Earth", id: 3 },
    { name: "Mars", id: 4 },
    { name: "Saturn", id: 1 },
    { name: "Uranus", id: 1 },
    { name: "Neptune", id: 1 },
  ],
  dialogs: ["Hey, have you ever ?", "Indeed, knowledge together!"],
  newMessage: "",
};

let reducerMessagesPage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let message = state.newMessage;
      return {
        ...state,
        dialogs: [...state.dialogs, message],
        newMessage: "",
      };
    case ADD_CHANGES_MESSAGE:
      return {
        ...state,
        newMessage: action.text,
      };
    default:
      return state;
  }
};

export default reducerMessagesPage;
