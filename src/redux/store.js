import reducerProfilePage from "./reducerProfilePage";
import reducerMessagesPage from "./reducerMessagesPage";

let store = {
  _state: {
    profilePage: {
      posts: [
        { text: "Post 1", likes: 23 },
        { text: "Post 2", likes: 12 },
        { text: "Post 3", likes: 24 },
        { text: "Post 4", likes: 543 },
        { text: "Post 5", likes: 1 },
        { text: "Post 6", likes: 1 },
      ],
      newPost: "",
    },
    messagesPage: {
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
    },
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = reducerProfilePage(action, store._state.profilePage);
    this._state.messagesPage = reducerMessagesPage(action, store._state.messagesPage);
    store._callSubscriber()
  },
};

export default store;
