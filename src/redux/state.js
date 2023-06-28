const store = {
  _state: {
    profilePage: {
      posts: [
        { text: "Post 1", likes: 23 },
        { text: "Post 2", likes: 12 },
        { text: "Post 3", likes: 24 },
        { text: "Post 4", likes: 543 },
        { text: "Post 5", likes: 1 },
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
    if (action.type == "ADD-POST") {
      let text = this._state.profilePage.newPost;
      this._state.profilePage.posts.push({ text: text, likes: 0 });
      this._callSubscriber();
    } else if (action.type == "ADD-CHANGES-TEXT") {
      this._state.profilePage.newPost = action.text;
      this._callSubscriber();
    } else if (action.type == "ADD-MESSAGE") {
      let message = this._state.messagesPage.newMessage;
      this._state.messagesPage.dialogs.push(message);
      this._callSubscriber();
    } else if (action.type == "ADD-CHANGES-MESSAGE") {
      this._state.messagesPage.newMessage = action.text;
      this._callSubscriber();
    }
  },
};

export default store;
