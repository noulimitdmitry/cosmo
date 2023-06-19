import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
        <Sidebar />
      </div>
    </BrowserRouter>
  );
};

export default App;
