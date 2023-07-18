import Users from "./Users";
import { actionCreatorAddUser } from "../../../redux/reducerUsersPage";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatches) => {
  return {
    addUser: (name, message, position, system) => {
      dispatches(actionCreatorAddUser(name, message, position, system));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
