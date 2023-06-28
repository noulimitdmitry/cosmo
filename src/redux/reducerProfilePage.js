const ADD_POST = "ADD-POST";
const ADD_CHANGES_POST = "ADD-CHANGES-TEXT";

export const actionCreatorAddPost = () => ({ type: ADD_POST });
export const actionCreatorAddChangesPost = (text) => ({
  type: ADD_CHANGES_POST,
  text: text,
});

const reducerProfilePage = function (action, reducer, callSubscriber) {
  if (action.type == ADD_POST) {
    let text = reducer.newPost;
    reducer.posts.push({ text: text, likes: 0 });
    callSubscriber();
  } else if (action.type == ADD_CHANGES_POST) {
    reducer.newPost = action.text;
    callSubscriber();
  }
};

export default reducerProfilePage;
