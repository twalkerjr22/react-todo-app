import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./pages/Dashboard.jsx";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
