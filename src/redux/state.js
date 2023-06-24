import reRender from "../render";

const state = {
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
};

export const addPost = (message) => {
  state.profilePage.posts.push({ text: message, likes: 0 });
  reRender(state);
};

export const addChangesText = (text) => {
  state.profilePage.newPost = text;
  reRender(state);
};

export const addMessage = () => {
  state.messagesPage.dialogs.push(state.messagesPage.newMessage);
  reRender(state);
  state.messagesPage.newMessage = "";
};

export const addChangesMessage = (text) => {
  state.messagesPage.newMessage = text;
  reRender(state);
};

export default state;
