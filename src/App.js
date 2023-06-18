import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="App">
          <Header/>
          <Main/>
          <Sidebar/>
    </div>
  );
}

export default App;
