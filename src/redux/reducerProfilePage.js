const ADD_POST = "ADD-POST";
const ADD_CHANGES_POST = "ADD-CHANGES-TEXT";
const SET_PROFILE_PAGE = "SET-PROFILE-PAGE";

export const addPost = () => ({ type: ADD_POST });
export const addChangesPost = (text) => ({
  type: ADD_CHANGES_POST,
  text,
});
export const setProfilePage = (profile) => ({
  type: SET_PROFILE_PAGE,
  profile,
});

let initualState = {
  profile: null,
  posts: [
    { text: "Post 1", likes: 23 },
    { text: "Post 2", likes: 12 },
  ],
  newPost: "",
};

const reducerProfilePage = (state = initualState, action) => {
  switch (action.type) {
    case SET_PROFILE_PAGE:
      return {
        ...state,
        profile: action.profile,
      };
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
