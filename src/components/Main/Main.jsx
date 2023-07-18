import { Routes, Route, Outlet } from "react-router-dom";

import styles from "./Main.module.css";
import ProfileContainer from "./Profile/ProfileContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import UsersContainer from "./Users/UsersContainer";

const Main = (props) => {
  return (
    <div className={styles.main}>
      <Routes>
        <Route
          path="/"
          element={<ProfileContainer store={props.store} />}
        ></Route>
        <Route
          path="/messages"
          element={<MessagesContainer store={props.store} />}
        ></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/users" element={<UsersContainer />}></Route>
      </Routes>
      <Outlet />
    </div>
  );
};

export default Main;
