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
    {
      id: 0,
      follow: true,
      photoUrl:
        "https://dovidka.biz.ua/wp-content/uploads/2020/01/%D0%BC%D0%B0%D1%80%D1%81-%D0%B4%D1%96%D1%82%D1%8F%D0%BC.jpg",
      name: "Mars",
      message: "i am red",
      position: 4,
      system: "sun",
    },
    {
      id: 1,
      follow: false,
      photoUrl:
        "https://futurenow.com.ua/wp-content/uploads/2020/09/tsikavi-fakty-pro-saturn-suputnyky-planety-saturn-kiltsya-atmosfera.jpg",
      name: "Saturn",
      message: "i am windy",
      position: 5,
      system: "cirius",
    },
  ],
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
