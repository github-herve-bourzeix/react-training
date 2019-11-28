// import _ from 'lodash'
//
// function component() {
//   const element = document.createElement('div');
//
//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['Hello', 'aurel'], ' ');
//
//   return element;
// }
//
// document.body.appendChild(component());
import React from "react";
import ReactDOM from "react-dom";


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.createElement('div');
document.body.appendChild(rootElement)
ReactDOM.render(<App />, rootElement);
