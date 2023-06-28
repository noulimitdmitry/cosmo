import { Routes, Route, Outlet } from "react-router-dom";

import styles from "./Main.module.css";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Main = (props) => {
  return (
    <div className={styles.main}>
      <Routes>
        <Route
          path="/"
          element={
            <Profile
              posts={props.state.profilePage}
              dispatch={props.dispatch}
            />
          }
        ></Route>
        <Route
          path="/messages"
          element={
            <Messages
              messages={props.state.messagesPage}
              dispatch={props.dispatch}
            />
          }
        ></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
      <Outlet />
    </div>
  );
};

export default Main;
