import { Routes, Route } from "react-router-dom";

import styles from "./Main.module.css";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Main = () => {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
