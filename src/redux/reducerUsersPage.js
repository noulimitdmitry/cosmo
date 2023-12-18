const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const USERS = "USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

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

export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});

export const setTotalUsersCountAC = (totalCountPages) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount: totalCountPages,
});

let initualState = {
  users: [],
  totalCount: 0,
  pageSize: 10,
  firstPage: 1,
  currentPage: 2,
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
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalCount: action.totalCount <= 100 ? action.totalCount : 100};
    default: {
      return state;
    }
  }
};

export default reducerUsersPage;
