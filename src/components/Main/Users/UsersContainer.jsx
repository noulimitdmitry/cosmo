import Users from "./Users";
import { actionCreatorAddUser } from "../../../redux/reducerUsersPage";
import { actionCreatorAddChangesName } from "../../../redux/reducerUsersPage";
import { actionCreatorAddChangesMessage } from "../../../redux/reducerUsersPage";
import { actionCreatorAddChangesPosition } from "../../../redux/reducerUsersPage";
import { actionCreatorAddChangesSystem } from "../../../redux/reducerUsersPage";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    newName: state.usersPage.newName,
    newMessage: state.usersPage.newMessage,
    newPosition: state.usersPage.newPosition,
    newSystem: state.usersPage.newSystem,
  };
};

let mapDispatchToProps = (dispatches) => {
  return {
    addUser: (name, message, position, system) => {
      dispatches(actionCreatorAddUser(name, message, position, system));
    },
    addChangesName: (name) => {
      dispatches(actionCreatorAddChangesName(name));
    },
    addChangesMessage: (message) => {
      dispatches(actionCreatorAddChangesMessage(message));
    },
    addChangesPosition: (position) => {
      dispatches(actionCreatorAddChangesPosition(position));
    },
    addChangesSystem: (system) => {
      dispatches(actionCreatorAddChangesSystem(system));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
