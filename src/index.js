import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

// Import CSS File
import "./styles.css";

// Container Components
import Site from './components/Site/Site'

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Todo App</h1>
      <Site />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  rootElement
);
