import React from "react";

var isLoggedin = true;

function renderConditionally() {
  if (isLoggedin === true) {
    return <h1>Hello</h1>;
  } else {
    return(
    <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

function App() {
  return (
    <div className="container">
      {renderConditionally()}
    </div>
  );
}

export default App;
