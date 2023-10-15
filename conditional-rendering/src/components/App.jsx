import React from "react";
import Login from "./Login";

var isLoggedin = true;

const currentTime = new Date(2019, 11 ,1, 8).getHours();



function App() {
  return <div className="container">{
    //Ternary
    //isLoggedin ? <h1>Hello</h1> : <Login />

    //AND Operator
    //currentTime > 12 && <h1>Why are you still working</h1>
    
  }</div>;
}

export default App;
