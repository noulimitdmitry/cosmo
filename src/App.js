import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="App">
          <Header />
          <Main store={props.store} />
          <Sidebar />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
