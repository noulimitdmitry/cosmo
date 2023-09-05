const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const USERS = "USERS";

export const followAC = (userId) => ({
  type: FOLLOW,
  userId: userId,
});

export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId: userId,
});

export const setUsersAC = (users) => ({
  type: USERS,
  users: users,
});

let initualState = {
  users: [],
};

const reducerUsersPage = (state = initualState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id == action.userId ? { ...user, follow: true } : user
        ),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          action.userId == user.id ? { ...user, follow: false } : user
        ),
      };
    case USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default: {
      return state;
    }
  }
};

export default reducerUsersPage;
