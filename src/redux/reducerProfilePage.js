const ADD_POST = "ADD-POST";
const ADD_CHANGES_POST = "ADD-CHANGES-TEXT";

export const actionCreatorAddPost = () => ({ type: ADD_POST });
export const actionCreatorAddChangesPost = (text) => ({
  type: ADD_CHANGES_POST,
  text: text,
});

let initualState = {
  posts: [
    { text: "Post 1", likes: 23 },
    { text: "Post 2", likes: 12 },
  ],
  newPost: "",
};

const reducerProfilePage = (state = initualState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newObject = { text: state.newPost, likes: 0 };
      return {
        ...state,
        posts: [...state.posts, newObject],
        newPost: "",
      };
    case ADD_CHANGES_POST:
      return { ...state, newPost: action.text };
    default: {
      return state;
    }
  }
};
export default reducerProfilePage;
