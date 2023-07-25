const ADD_USER = "ADD-USER";
const ADD_CHANGES_NAME = "ADD-CHANGES-NAME";
const ADD_CHANGES_MESSAGE = "ADD-CHANGES-MESSAGE";
const ADD_CHANGES_POSITION = "ADD-CHANGES-POSITION";
const ADD_CHANGES_SYSTEM = "ADD-CHANGES-SYSTEM";

export const actionCreatorAddUser = () => ({
  type: ADD_USER,
});

export const actionCreatorAddChangesName = (name) => ({
  type: ADD_CHANGES_NAME,
  name: name,
});

export const actionCreatorAddChangesMessage = (message) => ({
  type: ADD_CHANGES_MESSAGE,
  message: message,
});

export const actionCreatorAddChangesPosition = (position) => ({
  type: ADD_CHANGES_POSITION,
  position: position,
});

export const actionCreatorAddChangesSystem = (system) => ({
  type: ADD_CHANGES_SYSTEM,
  system: system,
});

let initualState = {
  users: [
    {
      name: "Mars",
      message: "i am red",
      position: 4,
      system: "sun",
    },
    {
      name: "Jupiter",
      message: "i am windy",
      position: 5,
      system: "cirius",
    },
  ],
  newName: "",
  newMessage: "",
  newPosition: "",
  newSystem: "",
};

const reducerUsersPage = (state = initualState, action) => {
  switch (action.type) {
    case ADD_USER:
      let newObject = {
        name: state.newName,
        message: state.newMessage,
        position: state.newPosition,
        system: state.newSystem,
      };
      return {
        ...state,
        users: [...state.users, newObject],
        newUser: {
          name: "",
          message: "",
          position: "",
          system: "",
        },
      };
    case ADD_CHANGES_NAME:
      return {
        ...state,
        newName: action.name,
      };
    case ADD_CHANGES_MESSAGE:
      return {
        ...state,
        newMessage: action.message,
      };
    case ADD_CHANGES_POSITION:
      return {
        ...state,
        newPosition: action.position,
      };
    case ADD_CHANGES_SYSTEM:
      return {
        ...state,
        newSystem: action.system,
      };
    default: {
      return state;
    }
  }
};
export default reducerUsersPage;
