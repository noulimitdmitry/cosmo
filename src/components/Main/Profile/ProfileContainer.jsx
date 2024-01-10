import Profile from "./Profile";
import {
  addPost,
  addChangesPost,
  setProfilePage,
} from "../../../redux/reducerProfilePage";
import { connect } from "react-redux";
import React from "react";
import axios from "axios";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setProfilePage(response.data);
      });
  }
  render() {
    debugger
    return <Profile {...this.props} profile={this.props.profile}/>;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  newPost: state.profilePage.newPost,
  posts: state.profilePage.posts,
});

export default connect(mapStateToProps, {
  addPost,
  addChangesPost,
  setProfilePage,
})(ProfileContainer);
