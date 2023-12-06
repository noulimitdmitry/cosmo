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
  users: [
    //   {
    //     name: "carmel",
    //     id: 5,
    //     uniqueUrlName: null,
    //     photos: {
    //       small: null,
    //       large: null,
    //     },
    //     status: null,
    //     followed: true,
    //   },
    //   {
    //     name: "babel",
    //     id: 6,
    //     uniqueUrlName: null,
    //     photos: {
    //       small: null,
    //       large: null,
    //     },
    //     status: null,
    //     followed: false,
    //   },
    //   {
    //     name: "chok",
    //     id: 7,
    //     uniqueUrlName: null,
    //     photos: {
    //       small: null,
    //       large: null,
    //     },
    //     status: null,
    //     followed: true,
    //   },
  ],
};

const reducerUsersPage = (state = initualState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id == action.userId ? { ...user, followed: true } : user
        ),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          action.userId == user.id ? { ...user, followed: false } : user
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
