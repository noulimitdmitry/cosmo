import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

const App = (props) => {
  return (
    <Router>
      <div className="wrapper">
        <div className="App">
          <Header />
          <Routes>
            <Route path="*" element={<Main store={props.store} />} />
          </Routes>
          <Sidebar />
        </div>
      </div>
    </Router>
  );
};

export default App;
