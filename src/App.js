import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import {friends} from './data.js'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="App">
          <Header />
          <Main friends={friends}/>
          <Sidebar />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
