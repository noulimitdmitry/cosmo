const ADD_USER = "ADD-USER";

export const actionCreatorAddUser = (name, message, position, system) => ({
  type: ADD_USER,
  name: name,
  message: message,
  position: position,
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
    {
      name: "Venera",
      message: "i am yellow",
      position: 2,
      system: "moon",
    },
    
  ],
  newUser: {
    name: "",
    message: "",
    position: "",
    system: "",
  },
};

const reducerUsersPage = (state = initualState, action) => {
  switch (action.type) {
    case ADD_USER:
      let newObject = {
        name: action.name,
        message: action.message,
        position: action.position,
        system: action.system,
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
    default: {
      return state;
    }
  }
};
export default reducerUsersPage;
