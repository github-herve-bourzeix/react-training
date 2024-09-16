import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.createElement('div');
document.body.appendChild(rootElement)
ReactDOM.render(<App />, rootElement);
