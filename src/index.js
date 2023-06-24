import reportWebVitals from './reportWebVitals';
import { subscribe } from './redux/state';
import state from './redux/state'
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from "./redux/state.js";
import { addChangesText } from "./redux/state.js";
import { addMessage } from "./redux/state.js";
import { addChangesMessage } from "./redux/state.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

let reRender = () => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addChangesText={addChangesText} addMessage={addMessage} addChangesMessage={addChangesMessage}/>
    </React.StrictMode>
  );
  reportWebVitals();
};


reRender();
subscribe(reRender)


