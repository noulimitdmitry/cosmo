import Profile from "./Profile";
import { actionCreatorAddPost } from "../../../redux/reducerProfilePage";
import { actionCreatorAddChangesPost } from "../../../redux/reducerProfilePage";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPost: state.profilePage.newPost,
    posts: state.profilePage.posts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(actionCreatorAddPost());
    },
    addChangePostText: (text) => {
      dispatch(actionCreatorAddChangesPost(text));
    },
  };
};

const superProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default superProfileContainer;
