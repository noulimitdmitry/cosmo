import { createStore, combineReducers } from "redux";
import reducerProfilePage from "./reducerProfilePage";
import reducerMessagesPage from "./reducerMessagesPage";
import reducerUsersPage from "./reducerUsersPage";

let reducers = combineReducers({
  profilePage: reducerProfilePage,
  messagesPage: reducerMessagesPage,
  usersPage: reducerUsersPage,
});

let store = createStore(reducers);

export default store;
